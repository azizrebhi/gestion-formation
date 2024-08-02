package com.example.gestionFormation.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity(name = "Salle")
@Table(name = "salle")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@FieldDefaults(level= AccessLevel.PRIVATE)
public class Salle {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id ;
    private String salleName;
}
