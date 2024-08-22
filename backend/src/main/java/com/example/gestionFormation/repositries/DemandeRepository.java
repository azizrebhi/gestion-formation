package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.Demand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DemandeRepository  extends JpaRepository<Demand,Long> {
}
