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
        message.setSubject("Setup Your Password");
        message.setText("Click the following link to set your password: "
                + "http://localhost:4200/setup-password?token=" + token);
        mailSender.send(message);
    }
}