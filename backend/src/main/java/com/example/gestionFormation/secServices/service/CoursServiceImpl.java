package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Cours;
import com.example.gestionFormation.entities.Language;
import com.example.gestionFormation.repositries.CoursRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CoursServiceImpl implements ICoursService {
    @Autowired
    CoursRepository coursRepository;
    @Override
    public Cours addCourse(Cours cours) {

        return coursRepository.save(cours);
    }

    @Override
    public List<Cours> getAllCourses() {
        return coursRepository.findAll();
    }

    @Override
    public Cours getCourseById(Long id) {
        return coursRepository.findById(id).orElseThrow(() -> new RuntimeException("Course not found with id " + id));
    }

    @Override
    public void deleteCourseById(Long id) {
        coursRepository.deleteById(id);
    }



    @Override
    public Cours updateCourse(Long id, Cours coursDetails) {
        Cours cours = getCourseById(id);
        cours.setName(coursDetails.getName());
        cours.setDescription(coursDetails.getDescription());
        cours.setLanguages(coursDetails.getLanguages());
        return coursRepository.save(cours);
    }

    @Override
    public Cours updateCours(Cours cours) {
        return coursRepository.save(cours);
    }

    @Override
    public List<Language> getLanguagesByCoursId(Long coursId) {
        return coursRepository.findLanguagesByCoursId(coursId);
    }

    @Override
    public Optional<Cours> getCoursByIdWithLanguagesAndFormateurs(Long id) {
        return coursRepository.findByIdWithLanguagesAndFormateurs(id);
    }

    @Override
    public Optional<Cours> getCoursByNameWithLanguagesAndFormateurs(String name) {
        return coursRepository.findByNameWithLanguagesAndFormateurs(name);
    }


}
