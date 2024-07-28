package com.example.gestionFormation.secServices;


public class EmailService {
  /*  @Autowired
    private JavaMailSender javaMailSender;

    public void sendResetPasswordEmail(String to, String resetUrl) {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper;
        try {
            helper = new MimeMessageHelper(message, true);
            helper.setFrom(new InternetAddress("wiem.khedri50@gmail.com"));
            helper.setTo(to);
            helper.setSubject("Réinitialisation de mot de passe");

            String htmlContent = "<p>Pour réinitialiser votre mot de passe, veuillez cliquer sur le lien suivant :</p>"
                    + "<a href='" + resetUrl + "'>" + resetUrl + "</a>";
            helper.setText(htmlContent, true);
            javaMailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
            // Gérer l'erreur d'envoi d'e-mail ici
        }

    }*/
}