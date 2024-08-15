package com.example.gestionFormation.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Formation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idFormation;

    private String nomFormation;
    private String categorie;
    private Long duree;
    private String video;
    private String description;
    private int level;

    @ManyToOne
    @JoinColumn(name = "sujet_id", nullable = false)
    @JsonBackReference
    private Sujet sujet;
}
