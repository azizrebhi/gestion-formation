package com.example.gestionFormation.Repository;

import com.example.gestionFormation.entity.Form;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepository extends JpaRepository<Form,Long> {
}
