package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.Cours;
import com.example.gestionFormation.entities.Language;
import com.example.gestionFormation.entities.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CoursRepository extends JpaRepository<Cours, Long> {
    @Query("SELECT l FROM Language l WHERE l.cours.id = :coursId")
    List<Language> findLanguagesByCoursId(Long coursId);
}
