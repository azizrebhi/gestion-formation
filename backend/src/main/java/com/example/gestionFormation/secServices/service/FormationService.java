package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Formation;
import com.example.gestionFormation.entities.Sujet;
import com.example.gestionFormation.repositries.FormationRepository;
import com.example.gestionFormation.repositries.SujetRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormationService {

    @Autowired
    private FormationRepository formationRepository;

    @Autowired
    private SujetRepository sujetRepository;

    public Formation saveFormation(Formation formation, String nomSujet) {
        Sujet sujet = sujetRepository.findByNomSujet(nomSujet)
                .orElseThrow(() -> new RuntimeException("Sujet not found with nomSujet: " + nomSujet));
        formation.setSujet(sujet);
        return formationRepository.save(formation);
    }


    public List<Formation> saveFormations(List<Formation> formations) {
        return formationRepository.saveAll(formations);
    }

    public List<Object[]> getFormations() {
        return formationRepository.findAllWithoutVideo();
    }


    public List<Formation> getFormationsBySujetId(Long sujet_id) {
        // Fetch the Sujet using findById which returns an Optional
        Optional<Sujet> sujet = sujetRepository.findById(sujet_id);

        // Handle the case where the Sujet is not found
        if (sujet.isPresent()) {
            // If the Sujet exists, return its formations
            return sujet.get().getSujetFormations();
        } else {
            // If the Sujet is not found, return an empty list or throw an exception
            throw new EntityNotFoundException("Sujet not found with id: " + sujet_id);
        }
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
        Formation existingFormation = formationRepository.findById(formation.getIdFormation()).orElse(null);
        if (existingFormation != null) {
            existingFormation.setNomFormation(formation.getNomFormation());
           // existingFormation.setCategorie(formation.getCategorie());
            existingFormation.setDescription(formation.getDescription());
            existingFormation.setLevel(formation.getLevel());
            existingFormation.setDuree(formation.getDuree());
            existingFormation.setVideo(formation.getVideo());
            return formationRepository.save(existingFormation);
        } else {
            return null;
        }
    }
}
