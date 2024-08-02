package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Role;
import com.example.gestionFormation.entities.User;

import com.example.gestionFormation.enumeration.EnumRole;
import com.example.gestionFormation.payload.request.LoginRequest;
import com.example.gestionFormation.payload.request.SignupRequest;
import com.example.gestionFormation.payload.response.JwtResponse;
import com.example.gestionFormation.payload.response.MessageResponse;
import com.example.gestionFormation.repositries.RoleRepository;
import com.example.gestionFormation.repositries.UserRepository;
import com.example.gestionFormation.security.jwt.JwtUtils;
import com.example.gestionFormation.security.services.UserDetailsImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtUtils jwtUtils;




    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByName(signUpRequest.getName())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getName(),
                signUpRequest.getEmail(),
                passwordEncoder.encode(signUpRequest.getPassword()));

        // Assign the role based on the input
        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null || strRoles.isEmpty()) {
            // Set default role as ROLE_FORMATEUR if no role is provided
            Role formateurRole = roleRepository.findByName(EnumRole.ROLE_FORMATEUR)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(formateurRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(EnumRole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);
                        break;
                    case "formateur":
                        Role formateurRole = roleRepository.findByName(EnumRole.ROLE_FORMATEUR)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(formateurRole);
                        break;
                    default:
                        Role userRole = roleRepository.findByName(EnumRole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setActive(true);
        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getName(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(grantedAuthority -> grantedAuthority.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> signoutUser() {
        try {
            // Invalidate the current authentication context
            SecurityContextHolder.clearContext();

            // Log successful signout
            System.out.println("User signed out successfully.");

            return ResponseEntity.ok(new MessageResponse("User signed out successfully!"));
        } catch (Exception e) {
            // Log any exception that might occur during signout
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new MessageResponse("An error occurred during signout."));
        }
    }
/*
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestParam("email") String email) {
        // Vérifier si l'utilisateur avec cet e-mail existe
        System.out.println("here email"+email
        );
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();

            // Générer un jeton temporaire pour la réinitialisation de mot de passe
            String resetToken = UUID.randomUUID().toString();
            user.setResetToken(resetToken);
            userRepository.save(user);

            // Envoyer un e-mail avec le lien de réinitialisation
            String resetUrl = "http://yourapp.com/reset-password?token=" + resetToken;
            emailService.sendResetPasswordEmail(user.getEmail(), resetUrl);

            return ResponseEntity.ok(new MessageResponse("Un e-mail de réinitialisation de mot de passe a été envoyé à votre adresse e-mail."));
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("Utilisateur non trouvé avec cet e-mail."));
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestParam("token") String token, @RequestParam("password") String newPassword) {
        // Trouver l'utilisateur avec le jeton donné
        Optional<User> optionalUser = userRepository.findByResetToken(token);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();

            // Utiliser l'encodeur pour hasher le nouveau mot de passe
            String encodedPassword = encoder.encode(newPassword);

            // Réinitialiser le mot de passe de l'utilisateur
            user.setPassword(encodedPassword);
            user.setResetToken(null);
            userRepository.save(user);

            return ResponseEntity.ok(new MessageResponse("Le mot de passe a été réinitialisé avec succès."));
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("Le jeton de réinitialisation de mot de passe est invalide."));
        }
    }


    @GetMapping("/users/{username}/profileImage")
    public ResponseEntity<?> getProfileImage(@PathVariable String username) {
        // Récupérer l'utilisateur par son nom d'utilisateur
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Error: User not found."));

        // Récupérer le nom de l'image de profil
        String profileImageName = user.getProfileImage();

        // Obtenir le chemin du stockage de l'image
        Path imagePath = imageService.load(profileImageName);

        // Vérifier si l'image existe
        if (!Files.exists(imagePath)) {
            return ResponseEntity
                    .notFound()
                    .build();
        }

        try {
            // Lire les données de l'image
            byte[] imageData = Files.readAllBytes(imagePath);

            // Créer les en-têtes de réponse
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG); // Ajuster selon le type d'image

            // Renvoyer l'image dans la réponse
            return ResponseEntity.ok()
                    .headers(headers)
                    .body(imageData);

        } catch (IOException e) {
            return ResponseEntity
                    .status(500)
                    .body(new MessageResponse("Error: Unable to read the profile image."));
        }
    }

*/

}





