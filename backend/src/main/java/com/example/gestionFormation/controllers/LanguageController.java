package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Cours;
import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.entities.Language;
import com.example.gestionFormation.secServices.service.CoursServiceImpl;
import com.example.gestionFormation.secServices.service.LanguageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/languages")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
public class LanguageController {
    @Autowired
    LanguageServiceImpl languageService;
    @Autowired
    CoursServiceImpl coursService;
    @PostMapping("/addLanguageAndAssignToCourse")
    public Cours addLanguageAndAssignToCourse(@RequestParam("name") String name,
                                              @RequestParam("courseId") Long courseId) throws IOException {
        // Create and save the new Language
        Language language = new Language();
        language.setName(name);
        // language.setImage(imageFile.getBytes());

        // Fetch the specified course
        Cours cours = coursService.getCourseById(courseId);

        // Assign the course to the language
        language.setCours(cours); // This ensures that the language is aware of the course

        // Save the language (which now knows about the course)
        Language savedLanguage = languageService.addLanguage(language);

        // Assign the saved language to the course
        cours.getLanguages().add(savedLanguage);

        // Update and save the course with the new language
        return coursService.updateCours(cours);
    }

    // Method to update an existing language
    @PutMapping("/updateLanguage/{id}")
    public Language updateLanguage(@PathVariable Long id,
                                   @RequestParam("name") String name,
                                   @RequestParam(value = "image", required = false) MultipartFile imageFile) throws IOException {
        Language existingLanguage = languageService.getLanguageById(id);
        existingLanguage.setName(name);
        if (imageFile != null && !imageFile.isEmpty()) {
            existingLanguage.setImage(imageFile.getBytes());
        }
        return languageService.updateLanguage(existingLanguage);
    }

    // Method to delete a language by ID
    @DeleteMapping("/deleteLanguage/{id}")
    public void deleteLanguage(@PathVariable Long id) {
        languageService.deleteLanguage(id);
    }

    @GetMapping("/all_languages")
    public List<Language> getAllLanguages() {
        return languageService.getAllLanguages();
    }

}
