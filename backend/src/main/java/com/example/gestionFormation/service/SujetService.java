package com.example.gestionFormation.service;

import com.example.gestionFormation.entities.Formation;
import com.example.gestionFormation.entities.Sujet;
import com.example.gestionFormation.repository.FormationRepository;
import com.example.gestionFormation.repository.SujetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SujetService {

    @Autowired
    private SujetRepository sujetRepository;

    @Autowired
    private FormationRepository formationRepository;

    public Sujet save(Sujet sujet) {
        return sujetRepository.save(sujet);
    }

    public List<Sujet> saveSujet(List<Sujet> sujets) {
        return sujetRepository.saveAll(sujets);
    }

    public List<Sujet> getSujets() {
        return sujetRepository.findAll();
    }

    public Sujet getSujetById(Long id) {
        return sujetRepository.findById(id).orElse(null);
    }

    public String deleteSujetById(long id) {
        if (sujetRepository.existsById(id)) {
            sujetRepository.deleteById(id);
            return "Sujet Deleted";
        } else {
            return "Sujet not found with id: " + id;
        }
    }

    public Sujet updateSujetById(Sujet sujet) {
        Sujet existingSujet = sujetRepository.findById(sujet.getSujet_id()).orElse(null);
        if (existingSujet != null) {
            existingSujet.setNomSujet(sujet.getNomSujet());
            existingSujet.setImageSujet(sujet.getImageSujet());
            existingSujet.setSujetFormations(sujet.getSujetFormations());
            return sujetRepository.save(existingSujet);
        } else {
            return null;
        }
    }

    public Sujet ajouterFormationAuSujet(Long sujetId, Long formationId) {
        Sujet sujet = sujetRepository.findById(sujetId)
                .orElseThrow(() -> new RuntimeException("Sujet non trouvé"));

        Formation formation = formationRepository.findById(formationId)
                .orElseThrow(() -> new RuntimeException("Formation non trouvée"));

        formation.setSujet(sujet);
        sujet.getSujetFormations().add(formation);

        return sujetRepository.save(sujet);
    }
}
