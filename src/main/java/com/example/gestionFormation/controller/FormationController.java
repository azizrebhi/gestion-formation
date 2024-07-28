package com.example.gestionFormation.controller;

import com.example.gestionFormation.Service.FormationService;
import com.example.gestionFormation.entity.Formation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FormationController {

    @Autowired
    private FormationService formationService;

    @PostMapping("/addFormation")
    public Formation addFormation(@RequestBody Formation formation) {
        return formationService.saveFormation(formation);
    }

    @PostMapping("/addFormations")
    public List<Formation> addFormations(@RequestBody List<Formation> formations) {
        return formationService.saveFormations(formations);
    }

    @GetMapping("/getFormations")
    public List<Formation> getFormations() {
        return formationService.getFormation();
    }

    @GetMapping("/getById/{id}")
    public Formation getFormationById(@PathVariable Long id) {
        return formationService.getFormationById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteFormation(@PathVariable long id) {
        return formationService.deleteFormationById(id);
    }

    @PutMapping("/update")
    public Formation updateFormationById(@RequestBody Formation formation) {
        return formationService.updateFormationById(formation);
    }
}