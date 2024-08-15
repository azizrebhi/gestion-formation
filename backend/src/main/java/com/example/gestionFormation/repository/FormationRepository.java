package com.example.gestionFormation.repository;

import com.example.gestionFormation.entity.Formation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FormationRepository extends JpaRepository<Formation, Long> {


    @Query("SELECT f.idFormation, f.nomFormation, f.categorie, f.duree, f.description, f.level, f.sujet.id " +
            "FROM Formation f")
    List<Object[]> findAllWithoutVideo();
}
