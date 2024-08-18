package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Cours;
import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.entities.Language;
import com.example.gestionFormation.secServices.service.CoursServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
public class CoursController {
    @Autowired
    private CoursServiceImpl coursService;

    @PostMapping("/addCours")
    public Cours addCourse(@RequestParam("name") String name,
                           @RequestParam("description") String description)
                           {
        Cours cours = new Cours();
        cours.setName(name);
        cours.setDescription(description);

        return coursService.addCourse(cours);
    }


    @GetMapping("/all_courses")
    public List<Cours> getAllCourses() {
        return coursService.getAllCourses();
    }

    @GetMapping("/{id}")
    public Cours getCourseById(@PathVariable Long id) {
        return coursService.getCourseById(id);
    }

    @PutMapping("/updateCourse/{id}")
    public Cours updateCourse(@PathVariable Long id, @RequestBody Cours coursDetails) {
        return coursService.updateCourse(id, coursDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteCourseById(@PathVariable Long id) {
        coursService.deleteCourseById(id);
    }


    @GetMapping("/{id}/languages")
    public List<Language> getLanguagesByCoursId(@PathVariable Long id) {
        return coursService.getLanguagesByCoursId(id);
    }

}
