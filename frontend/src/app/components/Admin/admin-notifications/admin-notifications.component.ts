import { Component, OnInit } from '@angular/core';
import { Stomp, CompatClient } from '@stomp/stompjs'; // Make sure to import CompatClient
import * as SockJS from 'sockjs-client';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {
  private stompClient: CompatClient | null = null; // Use CompatClient for compatibility
  notifications: any[] = []; // Property to hold notifications

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.initializeWebSocketConnection();
   // this.notifications = this.notificationService.getAllNotifications(); // Fetch all notifications
  }

  initializeWebSocketConnection() {
    const socket = new SockJS('http://localhost:8086/ws');
    this.stompClient = Stomp.over(socket) as CompatClient; // Cast to CompatClient

    this.stompClient.connect({}, () => {
      // Ensure stompClient is not null before using it
      if (this.stompClient) {
        this.stompClient.subscribe('/topic/notifications', (message) => {
          if (message.body) {
            const notification = JSON.parse(message.body);
            this.notifications.push(notification); // Add notification to the list
          }
        });
      }
    });
  }
  

 

 
}