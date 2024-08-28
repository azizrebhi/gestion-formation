package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Demand;
import com.example.gestionFormation.entities.Notification;
import com.example.gestionFormation.entities.NotificationMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class NotificationController {

        private final SimpMessagingTemplate messagingTemplate;

        public NotificationController(SimpMessagingTemplate messagingTemplate) {
            this.messagingTemplate = messagingTemplate;
        }

        @MessageMapping("/sendNotification")
        public void sendNotification(NotificationMessage notificationMessage) {
            // Use the correct destination path
            messagingTemplate.convertAndSend("/topic/notifications", notificationMessage);
        }
    }


