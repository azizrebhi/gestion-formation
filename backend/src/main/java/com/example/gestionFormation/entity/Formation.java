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
    private Date dateDebut ;
    @Getter@Setter
    private Date datefin ;
    @Getter@Setter
    private Long nombreParticipant ;
    @OneToOne
    private Pausecafe pausecafe ;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Salle> salles ;







}
