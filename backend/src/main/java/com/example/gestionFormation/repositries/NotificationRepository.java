package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.Notification;
import com.example.gestionFormation.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    Notification findTopByOrderByIdDesc();
    @Query("SELECT n FROM Notification n WHERE :user NOT MEMBER OF n.seenBy")
    List<Notification> findBySeenByNotContaining(@Param("user") User user);

}
