package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Demand;
import com.example.gestionFormation.secServices.service.DemandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
@RequestMapping("/api/demands")
public class DemandeController {
    @Autowired
    private DemandeService demandeService;

    // Endpoint to create a new demand
    @PostMapping
    public Demand createDemand(@RequestBody Demand demandeRequest) {
        return demandeService.saveDemande(demandeRequest);
    }

    // Endpoint to get a demand by ID
    @GetMapping("/{id}")
    public ResponseEntity<Demand> getDemandeById(@PathVariable Long id) {
        Demand demande = demandeService.getDemandeById(id);
        return ResponseEntity.ok(demande);
    }
    // Delete a demand by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDemande(@PathVariable Long id) {
        boolean isDeleted = demandeService.deleteDemande(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    // Endpoint to get all demands
    @GetMapping("/all_demands")
    public ResponseEntity<List<Demand>> getAllDemandes() {
        List<Demand> demandes = demandeService.getAllDemandes();
        return ResponseEntity.ok(demandes);
    }
    // Update a demand
    @PutMapping("/{id}")
    public ResponseEntity<Demand> updateDemand(@PathVariable("id") Long id, @RequestBody Demand demand) {
        Optional<Demand> updatedDemand = demandeService.updateDemande(id, demand);
        if (updatedDemand.isPresent()) {
            return new ResponseEntity<>(updatedDemand.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
