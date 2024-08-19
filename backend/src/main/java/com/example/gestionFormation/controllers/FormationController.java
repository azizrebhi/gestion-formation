package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Formation;
import com.example.gestionFormation.service.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/formations")
public class FormationController {

    @Autowired
    private FormationService formationService;

    @PostMapping("/addFormation/{sujetId}")
    public Formation addFormation(@RequestBody Formation formation, @PathVariable Long sujetId) {
        return formationService.saveFormation(formation, sujetId);
    }

    @PostMapping("/addFormations")
    public List<Formation> addFormations(@RequestBody List<Formation> formations) {
        return formationService.saveFormations(formations);
    }

    @GetMapping("/getFormations")
    public List<Object[]> getFormations() {
        return formationService.getFormations();
    }

    @GetMapping("/getFormationsById/{sujet_id}")
    public List<Formation> getFormationsById(@PathVariable Long sujet_id) {
        return formationService.getFormationsBySujetId(sujet_id);
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
