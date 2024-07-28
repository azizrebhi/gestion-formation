package com.example.gestionFormation.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
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
    @OneToOne
    private Pausecafe pausecafe ;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Salle> salles ;







}