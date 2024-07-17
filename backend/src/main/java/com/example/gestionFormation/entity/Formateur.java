package com.example.gestionFormation.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Formateur {
    @Id
    @SequenceGenerator(
            name="formateur_sequence",
            sequenceName="formateur_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy= GenerationType.SEQUENCE,
                      generator ="formateur_sequence")
    private long id ;
    private String name ;
    private String email ;
    private long tel;
}
