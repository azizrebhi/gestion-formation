package com.example.gestionFormation.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity(name = "Pausecafe")
@Table(name = "pausecafe")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@FieldDefaults(level= AccessLevel.PRIVATE)
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
