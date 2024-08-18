package com.example.gestionFormation.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Language {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Lob
    private byte[] image;

    @ManyToMany(mappedBy = "languages")
    @JsonIgnore
    private Set<Formateur> formateurs = new HashSet<>(); // Many-to-many association

    @ManyToOne
    @JoinColumn(name = "cours_id")
    private Cours cours;
}