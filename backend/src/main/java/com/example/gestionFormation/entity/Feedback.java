package com.example.gestionFormation.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Feedback {
    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE,
            generator ="feedback_sequence")
    private Long id;
    private int effectivenessRating; // Rating for presenter effectiveness
    private int knowledgeRating; // Rating for presenter knowledge
    private int engagementRating; // Rating for presenter engagement
    private int clarityRating;
    private int responsivenessRating;
}

