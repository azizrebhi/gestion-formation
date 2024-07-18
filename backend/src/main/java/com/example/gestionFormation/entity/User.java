package com.example.gestionFormation.entity;


import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;
import java.util.Set;

@Entity(name = "User")
@Table(name = "user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@FieldDefaults(level= AccessLevel.PRIVATE)

public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id ;
    private String name ;
    private String email;
    private String password ;
    @OneToMany
    @JoinColumn(name = "role_id")
    private List<Role> role;

    @OneToMany(cascade = CascadeType.ALL ,mappedBy = "user")
    private List<Reservation> reservations;
    @ManyToMany (cascade=CascadeType.ALL)
    private List<Formation> formations;
    @ManyToMany(cascade=CascadeType.ALL)
    private List<Renumeration> renumerations ;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Pausecafe> Pausecafes;
}
