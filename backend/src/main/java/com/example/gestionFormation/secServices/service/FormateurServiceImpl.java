package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Cours;
import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.entities.Language;
import com.example.gestionFormation.repositries.CoursRepository;
import com.example.gestionFormation.repositries.FormateurRepository;
import com.example.gestionFormation.repositries.LanguageRepository;
import com.example.gestionFormation.secServices.EmailService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.*;

@Service
public class FormateurServiceImpl implements IFormateurService{
    @Autowired
    FormateurRepository formateurRepository;
    @Autowired
    private EmailService emailService;
    @Autowired
    CoursRepository coursRepository;
    @Autowired
    LanguageRepository languageRepository;

    @Override
    public List<Formateur> getAllFormateurs() {
        return formateurRepository.findAll();
    }

    @Override
    public Formateur getFormateurById(Long id) {
        return formateurRepository.findById(id).orElse(null);
    }



    @Override
    public Formateur addFormateurToLangue(Long languageId, Formateur formateur) {
        Optional<Language> languageOptional = languageRepository.findById(languageId);

        if (languageOptional.isPresent()) {
            Language language = languageOptional.get();
            Cours cours = language.getCours();

            // Ensure only the selected language is added
            formateur.setCours(cours); // Automatically set the associated course
            formateur.getLanguages().clear(); // Clear existing languages
            formateur.getLanguages().add(language); // Add the selected language

            return formateurRepository.save(formateur); // Save and return the formateur
        } else {
            throw new IllegalArgumentException("Langue non trouvée");
        }
    }



    @Override
    public void deleteFormateur(Long id) {
        formateurRepository.deleteById(id);
    }

    @Override
    public List<Formateur> getFormateursByLanguage(Long languageId) {
        return formateurRepository.findByLanguageId(languageId);
    }


    @Override
    public List<Formateur> getFormateursByLanguageId(Long languageId) {
        return formateurRepository.findByLanguagesId(languageId);
    }

    @Override
    public Formateur updateFormateur(Long formateurId, Formateur updatedFormateur) {
        // Retrieve the existing Formateur
        Formateur formateur = formateurRepository.findById(formateurId)
                .orElseThrow(() -> new IllegalArgumentException("Formateur not found"));

        // Update basic details
        formateur.setName(updatedFormateur.getName());
        formateur.setEmail(updatedFormateur.getEmail());
        formateur.setTelephone(updatedFormateur.getTelephone());
        formateur.setAdresse(updatedFormateur.getAdresse());

        // Update languages
        formateur.getLanguages().clear();  // Remove existing languages
        formateur.getLanguages().addAll(updatedFormateur.getLanguages());  // Add updated languages

        // Save updated Formateur
        return formateurRepository.save(formateur);
    }
    @Override
    public Formateur getFormateurWithLanguages(Long formateurId) {
        Formateur formateur = formateurRepository.findById(formateurId)
                .orElseThrow(() -> new IllegalArgumentException("Formateur not found"));

        Set<Language> languages = languageRepository.findByFormateurId(formateurId);
        formateur.setLanguages(languages);

        return formateur;
    }
}






