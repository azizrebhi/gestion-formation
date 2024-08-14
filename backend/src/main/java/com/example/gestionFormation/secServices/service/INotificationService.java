package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Notification;

import java.util.List;

public interface INotificationService {
    Notification addNotification(Notification notification);
    List<Notification> getAllNotifications();

    void markAllAsSeenForUser(Long userId);
}
