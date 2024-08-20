package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Language;

import java.util.List;


public interface ILanguageService {
     Language addLanguage(Language language);
     Language getLanguageById(Long id);
    Language updateLanguage(Language language) ;
    public void deleteLanguage(Long id);
    List<Language> getAllLanguages();
    List<Language> getLanguagesByCourseId(Long courseId);

}
