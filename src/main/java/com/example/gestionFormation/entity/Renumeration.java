package com.example.gestionFormation.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Renumeration {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id ;
    private Long  idFormateur;
    private Long fraisTotale ;
    private Boolean valideF;
    private Boolean valideEF;

}
