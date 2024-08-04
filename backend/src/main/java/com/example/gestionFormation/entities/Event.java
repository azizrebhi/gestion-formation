package com.example.gestionFormation.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Boolean allDay;
    private String url;
    private String location;
    private String description;
    private String status;
    private LocalDateTime availableStart; // New fields for availability
    private LocalDateTime availableEnd;
   @ManyToOne
    @JoinColumn(name = "formateur_id")
    private Formateur formateur;
}
