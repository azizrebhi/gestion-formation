package com.example.gestionFormation.Repository;

import com.example.gestionFormation.entity.Questions;
import com.example.gestionFormation.entity.Response;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResponseRepository extends JpaRepository<Response,Long> {
    List<Response> findByFormId(Long formId);
}
