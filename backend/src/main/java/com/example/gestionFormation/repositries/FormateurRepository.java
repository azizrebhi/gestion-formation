package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.entities.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FormateurRepository extends JpaRepository<Formateur,Long> {
  Optional<Formateur> findByName(String name);
  @Query("SELECT f FROM Formateur f JOIN f.languages l WHERE l.id = :languageId")
  List<Formateur> findByLanguageId(@Param("languageId") Long languageId);
}
