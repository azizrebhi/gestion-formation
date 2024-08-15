package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entity.Sujet;
import com.example.gestionFormation.service.SujetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sujets")
public class SujetController {

    @Autowired
    private SujetService sujetService;

    @PostMapping("/addSujet")
    public Sujet addSujet(@RequestBody Sujet sujet) {
        return sujetService.save(sujet);
    }

    @PostMapping("/addSujets")
    public List<Sujet> addSujets(@RequestBody List<Sujet> sujets) {
        return sujetService.saveSujet(sujets);
    }

    @CrossOrigin(origins = "localhost:4200")

    @GetMapping("/getSujets")
    public List<Sujet> getSujets() {
        return sujetService.getSujets();
    }

    @GetMapping("/getById/{id}")
    public Sujet getSujetById(@PathVariable Long id) {
        return sujetService.getSujetById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteSujet(@PathVariable long id) {
        return sujetService.deleteSujetById(id);
    }

    @PutMapping("/update")
    public Sujet updateSujetById(@RequestBody Sujet sujet) {
        return sujetService.updateSujetById(sujet);
    }

    @PostMapping("/{sujetId}/formations/{formationId}")
    public ResponseEntity<Sujet> ajouterFormationAuSujet(
            @PathVariable Long sujetId,
            @PathVariable Long formationId) {
        Sujet sujet = sujetService.ajouterFormationAuSujet(sujetId, formationId);
        return ResponseEntity.ok(sujet);
    }
}
