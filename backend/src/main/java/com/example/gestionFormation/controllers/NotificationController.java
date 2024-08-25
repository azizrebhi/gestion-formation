package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Demand;
import com.example.gestionFormation.entities.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class NotificationController {
    /*
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/notify")
    @SendTo("/topic/notifications")
    public Notification send(Notification notification) {
        // Process the notification if needed
        return notification;
    }
    */
}
