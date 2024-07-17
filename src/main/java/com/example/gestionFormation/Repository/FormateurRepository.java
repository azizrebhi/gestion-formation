package com.example.gestionFormation.Repository;

import com.example.gestionFormation.entity.Formateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FormateurRepository extends JpaRepository<Formateur,Long> {


    Optional<Formateur> findFormateurByemail(String email);


}
