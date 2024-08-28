import { Component, OnInit } from '@angular/core';
import { NotificationMessage } from 'src/app/Model/notificationMessage.model';
import { WebSocketService } from 'src/app/service/web-socket.service';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {
  notifications: NotificationMessage[] = [];

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit() {
    this.webSocketService.notifications.subscribe((notification: NotificationMessage) => {
      console.log('Notification received:', notification);
      this.notifications.push(notification);
    });
  }
}
