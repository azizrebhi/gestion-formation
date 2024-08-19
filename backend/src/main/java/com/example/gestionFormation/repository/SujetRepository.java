package com.example.gestionFormation.repository;

import com.example.gestionFormation.entities.Sujet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SujetRepository extends JpaRepository<Sujet, Long> {
}
