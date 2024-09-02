package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.Sujet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SujetRepository extends JpaRepository<Sujet, Long> {

    Optional<Sujet> findByNomSujet(String nomSujet);


    @Query("SELECT s.nomSujet FROM Sujet s")
    List<String> findAllSujetNames();




}
