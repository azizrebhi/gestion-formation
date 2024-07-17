package com.example.gestionFormation.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
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
    @Getter@Setter
    private long id ;
    @Getter@Setter
    private long id_formateur ;
    @Getter@Setter
    private String nomFormation ;
    @Getter@Setter
    private String categorie ;
    @Getter@Setter
    private LocalDate dateDebut ;
    @Getter@Setter
    private LocalDate datefin ;
    @Getter@Setter
    private Long nombreParticipant ;










}