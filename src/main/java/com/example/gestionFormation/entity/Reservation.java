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
public class Reservation {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id ;
    private String reservationname ;
    private String salleName ;
    private String userName;
    private Date dateDebut ;
    private Date datefin ;
    private Boolean valide;


}
