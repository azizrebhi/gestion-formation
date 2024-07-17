package com.example.gestionFormation.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Renumeration {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id ;
    private Long  idFormateur;
    private Long fraisTotale ;
    private Boolean valideF;
    private Boolean valideEF;
    @OneToMany
    private List<Formation> formations ;


}
