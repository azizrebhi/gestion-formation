package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Notification;
import com.example.gestionFormation.entities.User;
import com.example.gestionFormation.repositries.NotificationRepository;
import com.example.gestionFormation.repositries.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NotificationServiceImpl implements INotificationService{
    @Autowired
    NotificationRepository notificationRepository;
    @Autowired
    UserRepository userRepository;
    @Override
    public Notification addNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    @Transactional
    public void markAllAsSeenForUser(Long userId) {
        //Get the user
        User user = userRepository.findById(userId).orElse(null);
        if (user==null){
            System.out.println("user not found ");
        }
        //Retreive notifications where the user is not in the seenBy list
        List<Notification> notifications =notificationRepository.findBySeenByNotContaining(user);
        //update the notification
        for (Notification notification:notifications){
            //add the user to the seenBy
            notification.getSeenBy().add(user);
        }




    }


}
