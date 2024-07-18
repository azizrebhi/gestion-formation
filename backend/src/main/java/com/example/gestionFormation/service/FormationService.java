package com.example.gestionFormation.service;

import com.example.gestionFormation.entity.Formation;
import com.example.gestionFormation.repository.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormationService {
    @Autowired
    private FormationRepository formationRepository;

    public Formation saveFormation(Formation formation) {
        return formationRepository.save(formation);
    }

    public List<Formation> saveFormations(List<Formation> formations) {
        return formationRepository.saveAll(formations);
    }

    public List<Formation> getFormation() {
        return formationRepository.findAll();
    }

    public Formation getFormationById(Long id) {
        return formationRepository.findById(id).orElse(null);
    }

    public String deleteFormationById(long id) {
        if (formationRepository.existsById(id)) {
            formationRepository.deleteById(id);
            return "Formation Deleted";
        } else {
            return "Formation not found with id: " + id;
        }
    }

    public Formation updateFormationById(Formation formation) {
        Formation existingFormation = formationRepository.findById(formation.getId()).orElse(null);
        if (existingFormation != null) {
            existingFormation.setNomFormation(formation.getNomFormation());
            existingFormation.setCategorie(formation.getCategorie());
            existingFormation.setId_formateur(formation.getId_formateur());
            existingFormation.setNombreParticipant(formation.getNombreParticipant());
            existingFormation.setDateDebut(formation.getDateDebut());
            existingFormation.setDatefin(formation.getDatefin());
            return formationRepository.save(existingFormation);
        } else {
            return null;
        }
    }
}
