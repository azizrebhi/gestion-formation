package com.example.gestionFormation.controllers;


import com.example.gestionFormation.entity.Formation;
import com.example.gestionFormation.repository.FormationRepository;
import com.example.gestionFormation.service.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.Format;
import java.util.List;

@RestController
public class FormationController {

    @Autowired
    private FormationService formationService;
    private FormationRepository formationRepository ;

    @PostMapping("/addFormation")
    public Formation addFormation(@RequestBody Formation formation){
        return formationService.saveFormation(formation);
    }

    @PostMapping("/addFormations")
    public List<Formation> addFormations(@RequestBody List<Formation> formations){
         return formationService.saveFormations(formations) ;

    }

    @GetMapping("/getFormations")
    public List<Formation> getFormations(){
        return formationService.getFormation();
    }

    @GetMapping("/getById")
    public Formation getFormationById(@PathVariable Long Id){
        return formationService.getFormationById(Id);
    }

    @DeleteMapping("/deletById")
    public String deleteFormation(@PathVariable Long Id){
        return formationService.deleteFormationById(Id);
    }

    @PutMapping("/update")
    public Formation updateFormationById(@RequestBody Formation formation){
        return formationService.updateFormationById(formation) ;
    }









}
