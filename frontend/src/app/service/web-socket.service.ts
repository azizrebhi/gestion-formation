import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import { Client, Message, Stomp } from '@stomp/stompjs';
import { NotificationMessage } from '../Model/notificationMessage.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private client: Client;
  private notificationSubject: Subject<NotificationMessage> = new Subject<NotificationMessage>();

  constructor() {
    this.client = Stomp.over(new SockJS('http://localhost:8086/academie/ws-notifications')); // Ensure endpoint is correct

    this.client.debug = (str: string) => { console.log('STOMP: ' + str); }; // Optional for debugging

    this.client.onConnect = this.onConnect.bind(this);
    this.client.onStompError = this.onStompError.bind(this);
    this.client.onDisconnect = this.onDisconnect.bind(this);

    this.client.activate();
  }

  private onConnect(frame: any) {
    console.log('Connected: ' + frame);

    // Ensure the subscription path matches the backend
    this.client.subscribe('/topic/notifications', (message: Message) => {
      this.notificationSubject.next(JSON.parse(message.body));
    });
  }

  private onStompError(frame: any) {
    console.error('STOMP error frame received: ', frame);
  }

  private onDisconnect() {
    console.log('STOMP client disconnected');
  }

  public get notifications(): Observable<NotificationMessage> {
    return this.notificationSubject.asObservable();
  }

  public sendNotification(notification: NotificationMessage) {
    if (this.client.connected) {
        this.client.publish({
            destination: '/app/sendNotification', // Ensure this matches your controller's endpoint
            body: JSON.stringify(notification)
        });
    } else {
        console.warn('STOMP client is not connected');
    }
}
}
