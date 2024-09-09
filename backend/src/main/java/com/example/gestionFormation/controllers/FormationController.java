package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Formation;
import com.example.gestionFormation.secServices.service.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
@RequestMapping("/formations")
public class FormationController {

    @Autowired
    private FormationService formationService;

    @PostMapping("/addFormation/{nomSujet}")
    public Formation addFormation(@RequestBody Formation formation, @PathVariable String nomSujet) {
        return formationService.saveFormation(formation, nomSujet);
    }


    @PostMapping("/addFormations")
    public List<Formation> addFormations(@RequestBody List<Formation> formations) {
        return formationService.saveFormations(formations);
    }

    /*@GetMapping("/getFormations")
    public List<Object[]> getFormations() {
        return formationService.getFormations();
    }*/

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
