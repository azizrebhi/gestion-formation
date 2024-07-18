package com.example.gestionFormation.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity(name = "Role")
@Table(name = "role")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@FieldDefaults(level= AccessLevel.PRIVATE)
public class Role {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id ;
    private String name;
}
