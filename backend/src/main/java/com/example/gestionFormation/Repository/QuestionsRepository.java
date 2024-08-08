package com.example.gestionFormation.Repository;

import com.example.gestionFormation.entity.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionsRepository extends JpaRepository<Questions,Long> {
}
