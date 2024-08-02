package com.example.gestionFormation.entities;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static jakarta.persistence.FetchType.EAGER;

@Entity(name = "User")
@Table(name = "user",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "name"),
                @UniqueConstraint(columnNames = "email")
        })
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@FieldDefaults(level= AccessLevel.PRIVATE)

public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String name;

    @NotBlank
    @Size(max = 50)
    private String email;

    private boolean active;

    private String otp;

    private LocalDateTime otpGeneratedTime;

    @NotBlank
    @Size(max = 120)
    private String password;

    @ManyToMany(fetch = EAGER)
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();

    @ManyToMany
    private List<Reservation> reservations;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Formation> formations;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Renumeration> renumerations;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Pausecafe> Pausecafes;

    private String resetToken;
    private LocalDateTime resetTokenExpirationTime;

    public User(String username, String email, String password) {
        this.name = username;
        this.email = email;
        this.password = password;
    }
}
