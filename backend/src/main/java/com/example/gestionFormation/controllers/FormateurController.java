package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.secServices.service.FormateurServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/formateurs")
public class FormateurController {
    @Autowired
    FormateurServiceImpl formateurService;
    @PostMapping("/addFormateur")
    public Formateur createFormateur(@RequestBody Formateur formateur) {
        return formateurService.createFormateur(formateur);
    }
    @GetMapping
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
}
