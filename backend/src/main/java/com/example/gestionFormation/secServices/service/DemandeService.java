package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Demand;
import com.example.gestionFormation.entities.Notification;
import com.example.gestionFormation.entities.NotificationMessage;
import com.example.gestionFormation.repositries.DemandeRepository;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class DemandeService {

    @Autowired
    private DemandeRepository demandeRepository;

    @Autowired
    private NotificationService notificationService; // Add this line



    public Demand saveDemande(Demand demandeRequest) {
        Demand demande = new Demand();
        demande.setTitle(demandeRequest.getTitle());
        demande.setTeam(demandeRequest.getTeam());
        demande.setStartDate(demandeRequest.getStartDate());
        demande.setEndDate(demandeRequest.getEndDate());
        demande.setOnline(demandeRequest.isOnline());
        demande.setPresentiel(demandeRequest.isPresentiel());
        demande.setSelectedCourseId(demandeRequest.getSelectedCourseId());
        demande.setSelectedLanguages(demandeRequest.getSelectedLanguages());
        demande.setSelectedFormateurId(demandeRequest.getSelectedFormateurId());

        // Save the demande in the database
        Demand savedDemande = demandeRepository.save(demande);

        // Create and send notification after saving the demand
        NotificationMessage notificationMessage = new NotificationMessage(
                savedDemande.getTitle(),  // Using saved demand title
                savedDemande.getTeam(),
                savedDemande.getStartDate(), // Ensure this is in the correct format
                savedDemande.getEndDate(),   // Ensure this is in the correct format
                "Formateur Name Placeholder", // Replace with actual formateur name
                savedDemande.isOnline(),
                savedDemande.isPresentiel()
        );

        notificationService.sendNotification(notificationMessage); // Send the notification

        return savedDemande;
    }

    public Demand getDemandeById(Long id) {
        Optional<Demand> demande = demandeRepository.findById(id);
        return demande.orElseThrow(() -> new RuntimeException("Demand not found"));
    }
    public boolean deleteDemande(Long id) {
        if (demandeRepository.existsById(id)) {
            demandeRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<Demand> updateDemande(Long id, Demand demande) {
        if (demandeRepository.existsById(id)) {
            demande.setId(id);
            Demand updatedDemande = demandeRepository.save(demande);
            return Optional.of(updatedDemande);
        }
        return Optional.empty();
    }

    public List<Demand> getAllDemandes() {
        return demandeRepository.findAll();
    }


}
