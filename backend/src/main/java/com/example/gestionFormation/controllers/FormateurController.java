package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.secServices.EmailService;
import com.example.gestionFormation.secServices.service.FormateurServiceImpl;
import com.example.gestionFormation.secServices.service.LanguageServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/formateurs")
@CrossOrigin(origins = "http://localhost:4200")
public class FormateurController {

    @Autowired
    private FormateurServiceImpl formateurService;

    @Autowired
    private LanguageServiceImpl languageService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/addFormateur/{languageId}")
    public ResponseEntity<Formateur> addFormateur(@PathVariable Long languageId, @RequestBody Formateur formateur) {
        System.out.println("Received Formateur: " + formateur);
        Formateur savedFormateur = formateurService.addFormateurToLangue(languageId, formateur);
        return ResponseEntity.ok(savedFormateur);
    }

    // Endpoint to fetch all formateurs with their languages
    @GetMapping("/all_formateurs")
    public ResponseEntity<List<Formateur>> getAllFormateurs() {
        List<Formateur> formateurs = formateurService.getAllFormateurs();
        return ResponseEntity.ok(formateurs);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Formateur> getFormateurById(@PathVariable Long id) {
        Optional<Formateur> formateur = formateurService.getFormateurById(id);
        return formateur.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Fetch formateur by ID with its languages and associated course
    @GetMapping("/withLanguages/{id}")
    public ResponseEntity<Formateur> getFormateurWithLanguages(@PathVariable Long id) {
        Formateur formateur = formateurService.getFormateurWithLanguages(id);
        if (formateur == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(formateur);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Formateur> updateFormateur(@PathVariable Long id, @RequestBody Formateur updatedFormateur) {
        try {
            Formateur updated = formateurService.updateFormateur(id, updatedFormateur);
            return ResponseEntity.ok(updated);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/by-language")
    public ResponseEntity<List<Formateur>> getFormateursByLanguage(@RequestParam Long languageId) {
        List<Formateur> formateurs = formateurService.getFormateursByLanguage(languageId);
        return ResponseEntity.ok(formateurs);
    }

    @DeleteMapping("/{id}")
    public void deleteFormateur(@PathVariable Long id) {
        formateurService.deleteFormateur(id);
    }
}
