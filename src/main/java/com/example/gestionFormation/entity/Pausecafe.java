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
public class Pausecafe {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id ;
    private Long idReservation ;
    private String formule ;
    private Long nombreParticipant ;
    private Boolean valideA;
    private Boolean valideM;

}
