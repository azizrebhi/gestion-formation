package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Language;
import com.example.gestionFormation.repositries.LanguageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanguageServiceImpl implements ILanguageService {
    @Autowired
    LanguageRepository languageRepository;
    @Override
    public Language addLanguage(Language language) {
        return languageRepository.save(language);
    }

    @Override
    public Language getLanguageById(Long id) {

            return languageRepository.findLanguageById(id);
        }



    // Method to delete a Language by ID
    @Override
    public void deleteLanguage(Long id) {
        Language language = getLanguageById(id);
        languageRepository.delete(language);
    }

    @Override
    public List<Language> getAllLanguages() {
        return languageRepository.findAll();
    }

    @Override
    public List<Language> getLanguagesByCourseId(Long courseId) {
        return languageRepository.findByCoursId(courseId);
    }

    @Override
    public Language updateLanguage(Language language) {
        return languageRepository.save(language);
    }

}
