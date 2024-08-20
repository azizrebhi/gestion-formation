package com.example.gestionFormation.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
public class Cours {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;
    @Lob
    private byte[] image;

    @OneToMany(mappedBy = "cours", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private Set<Language> languages;
    // Adding a method for fetching Formateurs through Languages
    @Transient // This indicates that this field is not to be persisted in the database
    public Set<Formateur> getFormateurs() {
        Set<Formateur> formateurs = new HashSet<>();
        for (Language language : languages) {
            formateurs.addAll(language.getFormateurs());
        }
        return formateurs;
    }
}
