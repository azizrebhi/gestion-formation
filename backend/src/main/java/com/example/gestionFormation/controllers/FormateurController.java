package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.secServices.EmailService;
import com.example.gestionFormation.secServices.service.FormateurServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/formateurs")
@CrossOrigin(origins = "http://localhost:4200")

public class FormateurController {
    @Autowired
    FormateurServiceImpl formateurService;
    @Autowired
    EmailService emailService;
    @PostMapping("/addFormateur")
    public ResponseEntity<Formateur> createFormateur(@RequestBody @Valid Formateur formateur) {
        // Set the default password
        formateur.setPassword("test33");

        Formateur createdFormateur = formateurService.createFormateur(formateur);

        // Send the activation email with the default password
        emailService.sendPasswordSetupEmail(formateur.getEmail(), formateur.getToken());

        return ResponseEntity.status(HttpStatus.CREATED).body(createdFormateur);
    }
    @PutMapping("/updateFormateur/{id}")
    public Formateur updateEvent(@PathVariable Long id, @RequestBody @Valid Formateur formateur) {
        return formateurService.updateFormateur(id, formateur);
    }
    @GetMapping("/all_formateurs")
    public List<Formateur> getAllFormateurs() {
        return formateurService.getAllFormateurs();
    }

    @GetMapping("/{id}")
    public Formateur getFormateurById(@PathVariable Long id) {
        return formateurService.getFormateurById(id);
    }
    @DeleteMapping("/{id}")
    public void deleteFormateur(@PathVariable Long id) {
        formateurService.deleteFormateur(id);
    }
    @PostMapping("/setup-password")
    public ResponseEntity<?> setupPassword(@RequestParam String token, @RequestParam String newPassword) {
        Formateur formateur = formateurService.getFormateurByToken(token);
        if (formateur == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid token");
        }
        formateur.setPassword(newPassword); // Ensure to handle password encryption
        formateurService.updateFormateur(formateur.getId(), formateur);

        return ResponseEntity.ok("Password updated successfully");
    }
}
