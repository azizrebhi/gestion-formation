package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Demand;
import com.example.gestionFormation.entities.Notification;
import com.example.gestionFormation.entities.NotificationMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class NotificationController {

    @MessageMapping("/sendNotification") // This matches your sendNotification destination
    @SendTo("/topic/notifications") // This is where the clients will be subscribed to receive notifications
    public NotificationMessage sendNotification(NotificationMessage notification) throws Exception {
        return notification; // Simply forward the notification to the topic
    }
    }


