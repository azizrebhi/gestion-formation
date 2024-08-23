package com.example.gestionFormation.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data


@Entity
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    private String title;
    private String team; // This should contain the team info
    private String startDate;
    private String endDate;
    private String formateurName; // This should contain the formateur's name
    private boolean online;
    private boolean presentiel;

    // Getters and setters


}
