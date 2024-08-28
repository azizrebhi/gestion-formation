package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.NotificationMessage;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {
    private final SimpMessagingTemplate messagingTemplate;

    public NotificationService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    // This method sends notifications to the specified WebSocket topic
    public void sendNotification(NotificationMessage notificationMessage) {
        messagingTemplate.convertAndSend("/topic/notification", notificationMessage);
    }
}
