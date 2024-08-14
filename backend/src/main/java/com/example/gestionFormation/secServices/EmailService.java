package com.example.gestionFormation.secServices;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendPasswordSetupEmail(String to, String token) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Activate Your Account");
        message.setText("Bonjour,\n\nVotre compte formateur a été créé avec succès. "
                + "Veuillez cliquer sur le lien suivant pour activer votre compte et configurer votre mot de passe : "
                + "http://localhost:4200/setup-password?token=" + token
                + "\n\nMot de passe par défaut : test33"
                + "\n\nVeuillez changer votre mot de passe après la première connexion.\n\nMerci.");

        mailSender.send(message);
    }
}