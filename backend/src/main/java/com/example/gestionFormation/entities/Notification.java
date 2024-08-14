package com.example.gestionFormation.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
@Entity
@Data

@Table(name = "notifications")

public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;
    @Setter
    private String content;

    private int count=0;

    @ManyToOne
    @JoinColumn(name = "created_by_id_utilisateur")
    private User createdBy;

    LocalDateTime timestamp = LocalDateTime.now();

    @ManyToMany(mappedBy = "seenNotifications")
    private List<User> seenBy;

    public void increment() {
        this.count++;
    }



}
