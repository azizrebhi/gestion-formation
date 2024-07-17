package com.example.gestionFormation.service;

import com.example.gestionFormation.entity.Formation;
import com.example.gestionFormation.repository.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.Normalizer;
import java.util.List;

@Service
public class FormationService {
    @Autowired
    private FormationRepository formationRepository ;

    public Formation saveFormation(Formation formation){
        return formationRepository.save(formation) ;
    }

    public List<Formation> saveFormations(List<Formation> formations){
        return formationRepository.saveAll(formations);
    }

    public List<Formation> getFormation(){
        return formationRepository.findAll();
    }

    public Formation getFormationById(Long id){
        return formationRepository.findById(id).orElse(null);

    }

    public String deleteFormationById(Long id){
         formationRepository.deleteById(id);
         return "Formation Deleted";
    }

    public Formation updateFormationById(Formation formation){
        Formation existingFormation =  formationRepository.findById(formation.getId()).orElse(null) ;
        existingFormation.setNomFormation(formation.getNomFormation());
        existingFormation.setCategorie(formation.getNomFormation());
        existingFormation.setId_formateur(formation.getId_formateur());
        existingFormation.setNombreParticipant(formation.getNombreParticipant());
        existingFormation.setDateDebut(formation.getDateDebut());
        existingFormation.setDatefin(formation.getDatefin());

        return formationRepository.save(existingFormation);

    }










}
