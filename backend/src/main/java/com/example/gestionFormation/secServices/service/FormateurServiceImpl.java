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

    @Override
    public List<Formateur> getFormateursByLanguageId(Long languageId) {
        return formateurRepository.findByLanguagesId(languageId);
    }

    @Override
    public Formateur addFormateurToLanguage(Long coursId, Long languageId, Formateur formateur) {
        Optional<Cours> coursOptional = coursRepository.findById(coursId);
        Optional<Language> languageOptional = languageRepository.findById(languageId);

        if(coursOptional.isPresent() && languageOptional.isPresent()){
            Cours cours = coursOptional.get();
            Language language = languageOptional.get();

            // Associate the formateur with the language
            formateur.getLanguages().add(language);
            language.getFormateurs().add(formateur);
            formateur.setCours(cours); // if you want to set the cours reference in formateur

            formateurRepository.save(formateur);
            return formateur; // return the saved formateur
        } else {
            // Handle case where Cours or Language does not exist
            throw new IllegalArgumentException("Cours or Language not found");
        }

    }

    @Override
    public Formateur updateFormateur(Long formateurId, Long coursId, Long languageId, Formateur updatedFormateur) {
        Optional<Formateur> formateurOptional = formateurRepository.findById(formateurId);
        Optional<Cours> coursOptional = coursRepository.findById(coursId);
        Optional<Language> languageOptional = languageRepository.findById(languageId);

        if (formateurOptional.isPresent() && coursOptional.isPresent() && languageOptional.isPresent()) {
            Formateur existingFormateur = formateurOptional.get();
            Cours cours = coursOptional.get();
            Language language = languageOptional.get();

            // Update Formateur details
            existingFormateur.setName(updatedFormateur.getName());
            existingFormateur.setEmail(updatedFormateur.getEmail());
            existingFormateur.setTelephone(updatedFormateur.getTelephone());
            existingFormateur.setAdresse(updatedFormateur.getAdresse());


            // Assign the formateur to the language and course
            if (!existingFormateur.getLanguages().contains(language)) {
                existingFormateur.getLanguages().add(language);
                language.getFormateurs().add(existingFormateur);
            }

            existingFormateur.setCours(cours); // Ensure the Formateur is associated with the correct course

            formateurRepository.save(existingFormateur);
            return existingFormateur;
        } else {
            throw new IllegalArgumentException("Formateur, Cours, or Language not found");
        }
    }

}






