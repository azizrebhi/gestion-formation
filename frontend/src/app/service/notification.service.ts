import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { BehaviorSubject, Observable } from 'rxjs';

// Define the structure of a notification
interface Notification {
  id: number;  // Example property - adjust according to your data structure
  message: string;  // Example property
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private stompClient: any;

  // Declare the notificationsSubject as a BehaviorSubject of Notification[]
  private notificationsSubject: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>([]); 
  notifications$: Observable<Notification[]> = this.notificationsSubject.asObservable();

  constructor() {
    this.connect();
  }

  private connect(): void {
    const socket = new SockJS('http://localhost:8086/ws');
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);
      this.subscribeToNotifications();
    }, (error: any) => {
      console.error('STOMP connection error:', error);
      setTimeout(() => this.connect(), 5000); // Attempt to reconnect after 5 seconds
    });
  }

  private subscribeToNotifications() {
    if (this.stompClient) {
      this.stompClient.subscribe('/topic/notifications', (notification: any) => {
        const parsedNotification: Notification = JSON.parse(notification.body);
        // Update notifications and notify subscribers
        this.notificationsSubject.next([...this.notificationsSubject.value, parsedNotification]);
        console.log('New notification received:', parsedNotification);
      });
    } else {
      console.error('STOMP client not initialized.');
    }
  }
  
}