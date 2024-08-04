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

    @Override
    public Formateur createFormateur(Formateur formateur) {
        // Generate a unique token for password setup
        String token = UUID.randomUUID().toString();
        // Save the token in your database or a secure storage
        formateur.setToken(token);
        formateurRepository.save(formateur);

        // Send email with the setup link
        emailService.sendPasswordSetupEmail(formateur.getEmail(), token);

        return formateur;

    }
    public Formateur getFormateurByToken(String token) {
        return formateurRepository.findByToken(token).orElse(null);
    }
    @Override
    public void deleteFormateur(Long id) {
        formateurRepository.deleteById(id);
    }
}
