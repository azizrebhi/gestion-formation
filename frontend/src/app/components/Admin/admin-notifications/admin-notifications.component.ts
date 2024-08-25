import { Component, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { NotificationService } from 'src/app/service/notification.service'; // Import your notification service

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {
  // Static list of notifications
  notifications: any[] = [
    {
      title: 'Training Session',
      team: 'Development',
      startDate: new Date('2023-10-01'),
      endDate: new Date('2023-10-05'),
      formateurName: 'hbib',
      online: true,
      presentiel: false,
    },
    {
      title: 'Project Review',
      team: 'PHP',
      startDate: new Date('2023-10-10'),
      endDate: new Date('2023-10-12'),
      formateurName: 'hbiba',
      online: false,
      presentiel: true,
    }
    // Add more static notifications as needed
  ];

  constructor() {}

  ngOnInit(): void {
    // No need to initialize WebSocket connection or subscribe to notifications
  }

 /* constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.initializeWebSocketConnection();

    // Subscribe to notifications updates
    this.notificationService.currentNotifications.subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  initializeWebSocketConnection() {
    const socket = new SockJS('http://localhost:8086/ws');
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);
      this.subscribeToNotifications();
    }, (error: any) => {
      console.error('STOMP connection error:', error);
    });
  }

  subscribeToNotifications() {
    if (this.stompClient) {
      this.stompClient.subscribe('/topic/notifications', (message: any) => {
        if (message.body) {
          const notification = JSON.parse(message.body);
          this.notificationService.addNotification(notification); // Update the service with the new notification
        }
      });
    }
  }*/
}