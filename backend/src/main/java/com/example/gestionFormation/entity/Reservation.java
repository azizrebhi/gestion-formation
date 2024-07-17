package com.example.gestionFormation.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id ;
    private String reservationname ;
    private String salleName ;
    private String userName;
    private Date dateDebut ;
    private Date datefin ;
    private Boolean valide;

    @ManyToOne
    private User user;

}
