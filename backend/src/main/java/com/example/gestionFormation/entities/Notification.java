package com.example.gestionFormation.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Data


@Entity
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



    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void increment() {
        this.count++;
    }

}

