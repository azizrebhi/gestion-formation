package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.entities.Language;
import com.example.gestionFormation.entities.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface LanguageRepository extends JpaRepository<Language, Long> {
    @Query("SELECT l FROM Language l WHERE l.id = :id")
    Language findLanguageById(@Param("id") Long id);
    Optional<Language> findByName(String name);

    List<Language> findByCoursId(Long coursId);

    @Query("SELECT l FROM Language l JOIN l.formateurs f WHERE f.id = :formateurId")
    Set<Language> findByFormateurId(@Param("formateurId") Long formateurId);


}
