package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.Form;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepository extends JpaRepository<Form,Long> {
}
