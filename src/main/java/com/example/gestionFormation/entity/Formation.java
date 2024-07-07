package com.example.gestionFormation.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Formation {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id ;
    private String nomFormation ;
    private String categorie ;
    private Date dateDebut ;
    private Date datefin ;
    private Long nombreParticipant ;




}
