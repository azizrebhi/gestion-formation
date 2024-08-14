package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.repositries.FormateurRepository;
import com.example.gestionFormation.secServices.EmailService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.List;
import java.util.UUID;

@Service
public class FormateurServiceImpl implements IFormateurService{
    @Autowired
    FormateurRepository formateurRepository;
    @Autowired
    private EmailService emailService;

    @Override
    public List<Formateur> getAllFormateurs() {
        return formateurRepository.findAll();
    }

    @Override
    public Formateur getFormateurById(Long id) {
        return formateurRepository.findById(id).orElse(null);
    }

    @Override
    public Formateur updateFormateur(Long id, Formateur formateur) {
        Formateur existingFormateur = formateurRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Formateur not found"));
        existingFormateur.setName(formateur.getName());
        existingFormateur.setEmail(formateur.getEmail());
        existingFormateur.setTelephone(formateur.getTelephone());
        existingFormateur.setAdresse(formateur.getAdresse());



        return formateurRepository.save(existingFormateur);
    }

    public Formateur createFormateur(Formateur formateur) {
        // Set default password and generate a token
        formateur.setPassword("test33");
        formateur.setToken(UUID.randomUUID().toString());
        return formateurRepository.save(formateur);
    }
   /* public void saveTokenForFormateur(Long formateurId, String token) {
        Formateur formateur = formateurRepository.findById(formateurId).orElse(null);
        if (formateur != null) {
            formateur.setToken(token); // Assuming Formateur entity has a token field
            formateurRepository.save(formateur);
        }
    }*/
    public Formateur getFormateurByToken(String token) {
        return formateurRepository.findByToken(token); // Assuming FormateurRepository has findByToken method
    }
    @Override
    public void deleteFormateur(Long id) {
        formateurRepository.deleteById(id);
    }
}
