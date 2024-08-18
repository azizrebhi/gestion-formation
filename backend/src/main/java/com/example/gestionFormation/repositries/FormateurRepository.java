package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.Formateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FormateurRepository extends JpaRepository<Formateur,Long> {
  Optional<Formateur> findByName(String name);
}
