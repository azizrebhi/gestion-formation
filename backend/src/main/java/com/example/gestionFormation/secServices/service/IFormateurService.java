package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.entities.Language;

import java.util.List;
import java.util.Set;

public interface IFormateurService {
    public List<Formateur> getAllFormateurs();
    public Formateur getFormateurById(Long id);


    public void deleteFormateur(Long id) ;
    public List<Formateur> getFormateursByLanguage(Long languageId);
    public Formateur assignFormateurToLanguage(Long formateurId, Long languageId);
    List<Formateur> getFormateursByLanguageId(Long languageId);
    public Formateur addFormateurToLanguage(Long coursId, Long languageId, Formateur formateur);
    Formateur updateFormateur(Long formateurId, Long coursId, Long languageId, Formateur updatedFormateur);
}
