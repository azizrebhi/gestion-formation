package com.example.gestionFormation.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
@Entity(name = "Reservation")
@Table(name = "reservation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@FieldDefaults(level= AccessLevel.PRIVATE)
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
