package com.example.gestionFormation.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.List;
@Entity(name = "Formation")
@Table(name = "formation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@FieldDefaults(level= AccessLevel.PRIVATE)
public class Formation {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id ;
    private Long id_formateur ;
    private String nomFormation ;
    private String categorie ;
    private Date dateDebut ;
    private Date datefin ;
    private Long nombreParticipant ;
    @OneToOne
    private Pausecafe pausecafe ;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Salle> salles ;
}
