package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.entities.Language;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface IFormateurService {
    public List<Formateur> getAllFormateurs();
    public Optional<Formateur> getFormateurById(Long id);

    public Formateur addFormateurToLangue(Long languageId, Formateur formateur);
    public void deleteFormateur(Long id) ;
    public List<Formateur> getFormateursByLanguage(Long languageId);

    List<Formateur> getFormateursByLanguageId(Long languageId);
    Formateur updateFormateur(Long formateurId, Formateur updatedFormateur);
    public Formateur getFormateurWithLanguages(Long formateurId);
}
