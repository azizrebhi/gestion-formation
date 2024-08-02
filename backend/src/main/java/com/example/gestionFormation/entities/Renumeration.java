package com.example.gestionFormation.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Entity(name = "Renumeration")
@Table(name = "renumeration")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@FieldDefaults(level= AccessLevel.PRIVATE)
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
