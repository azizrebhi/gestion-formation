package com.example.gestionFormation.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Demand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String team;
    private String startDate;
    private String endDate;
    private boolean online;
    private boolean presentiel;
    private Long selectedCourseId;

    @ElementCollection
    @CollectionTable(name = "demand_selected_languages")
    @Column(name = "language_id")
    private List<Long> selectedLanguages;
    private Long selectedFormateurId;
}
