package com.example.gestionFormation.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Formateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private Integer telephone;
    private String adresse;
    private String password;

    @OneToMany(mappedBy = "formateur", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Event> events;

    @ManyToOne
    @JoinColumn(name = "cours_id")
    private Cours cours;  // Assuming one course per formateur for simplification.
    @ManyToMany
    @JoinTable(
            name = "formateur_language",
            joinColumns = @JoinColumn(name = "formateur_id"),
            inverseJoinColumns = @JoinColumn(name = "language_id")
    )
    @JsonIgnore
    private Set<Language> languages = new HashSet<>(); // A Set of Languages

}