package com.example.gestionFormation.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Formation {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id ;
    private long id_formateur ;
    private String nomFormation ;
    private String categorie ;
    private Date dateDebut ;
    private Date datefin ;
    private Long nombreParticipant ;










}
