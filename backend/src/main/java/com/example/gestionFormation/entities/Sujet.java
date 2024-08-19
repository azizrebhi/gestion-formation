package com.example.gestionFormation.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Sujet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long sujet_id;

    private String nomSujet;
    private String imageSujet;

    @OneToMany(mappedBy = "sujet", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Formation> sujetFormations;
}
