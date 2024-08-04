package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Formateur;

import java.util.List;

public interface IFormateurService {
    public List<Formateur> getAllFormateurs();
    public Formateur getFormateurById(Long id);
    Formateur updateFormateur(Long id, Formateur formateur);
    public Formateur createFormateur(Formateur formateur);
    public void deleteFormateur(Long id) ;

}
