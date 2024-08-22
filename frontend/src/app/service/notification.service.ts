import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private stompClient: any;
  notifications: any[] = []; // Array to hold notifications

  constructor() {
    this.connect();
  }

  private connect(): void {
    const socket = new SockJS('http://localhost:8086/ws'); // Adjust with your server
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);
      this.subscribeToNotifications(); // Subscribe to notifications upon connection
    });
  }

  private subscribeToNotifications() {
    this.stompClient.subscribe('/topic/notifications', (notification: any) => {
      const parsedNotification = JSON.parse(notification.body);
      this.notifications.push(parsedNotification); // Store notification
      console.log('New notification received:', parsedNotification); // Log received notifications
    });
  }

  getNotifications(): Observable<any> {
    return new Observable(observer => {
      this.stompClient.subscribe('/topic/notifications', (notification: any) => {
        observer.next(JSON.parse(notification.body));
      });
    });
  }

  getAllNotifications(): any[] {
    return this.notifications; // Return stored notifications
  }
}