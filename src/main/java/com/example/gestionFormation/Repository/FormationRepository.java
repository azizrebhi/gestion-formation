package com.example.gestionFormation.repository;

import com.example.gestionFormation.entity.Formation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FormationRepository extends JpaRepository<Formation,Long> {

}