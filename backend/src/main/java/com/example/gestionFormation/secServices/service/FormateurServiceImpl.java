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
    public Formateur updateFormateur(Long id, Formateur formateur) {
        Formateur existingFormateur = formateurRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Formateur not found"));
        existingFormateur.setName(formateur.getName());
        existingFormateur.setEmail(formateur.getEmail());
        existingFormateur.setTelephone(formateur.getTelephone());
        existingFormateur.setAdresse(formateur.getAdresse());



        return formateurRepository.save(existingFormateur);
    }

    public Formateur createFormateur(Formateur formateur) {
        // Set default password and generate a token
        formateur.setPassword("test33");

        return formateurRepository.save(formateur);
    }
   /* public void saveTokenForFormateur(Long formateurId, String token) {
        Formateur formateur = formateurRepository.findById(formateurId).orElse(null);
        if (formateur != null) {
            formateur.setToken(token); // Assuming Formateur entity has a token field
            formateurRepository.save(formateur);
        }
    }*/

    @Override
    public void deleteFormateur(Long id) {
        formateurRepository.deleteById(id);
    }

    @Override
    public List<Formateur> getFormateursByLanguage(Long languageId) {
        return formateurRepository.findByLanguageId(languageId);
    }

    @Override
    public Formateur assignFormateurToLanguage(Long formateurId, Long languageId) {
        // Fetch the Formateur
        Formateur formateur = formateurRepository.findById(formateurId)
                .orElseThrow(() -> new RuntimeException("Formateur not found with id: " + formateurId));

        // Fetch the Language
        Language language = languageRepository.findById(languageId)
                .orElseThrow(() -> new RuntimeException("Language not found with id: " + languageId));

        // Get the associated Cours from the Language
        Cours cours = language.getCours();
        if (cours == null) {
            throw new RuntimeException("Language is not associated with any course");
        }

        // Assign the language to the formateur
        formateur.getLanguages().add(language);

        // Assign the formateur to the language
        language.getFormateurs().add(formateur);

        // Assign the cours to the formateur
        formateur.setCours(cours);

        // Save the updated entities
        formateurRepository.save(formateur);
        languageRepository.save(language);  // Ensure language is updated

        return formateur;
    }
    }






