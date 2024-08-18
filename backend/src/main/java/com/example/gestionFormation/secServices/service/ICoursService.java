package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Cours;
import com.example.gestionFormation.entities.Language;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

public interface ICoursService {
     Cours addCourse(Cours cours);
     List<Cours> getAllCourses() ;

     Cours getCourseById(Long id) ;

     void deleteCourseById(Long id) ;
     Cours updateCourse(Long id, Cours coursDetails);
     Cours updateCours(Cours cours) ;
     List<Language> getLanguagesByCoursId(Long coursId);
}
