package com.example.gestionFormation.secServices;

import com.example.gestionFormation.dto.UpdateUserDTO;
import com.example.gestionFormation.dto.UserDTO;
import com.example.gestionFormation.entity.User;
import com.example.gestionFormation.repositries.UserRepository;
import com.example.gestionFormation.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Méthode pour récupérer les détails d'un utilisateur par son nom d'utilisateur
    public Optional<UserDTO> getUserByUsername(String username) {
        Optional<User> userOptional = userRepository.findByName(username);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return Optional.of(new UserDTO(user.getName(), user.getEmail()));
        }
        return Optional.empty();
    }

    // Méthode pour mettre à jour les détails d'un utilisateur
    public Optional<UserDTO> updateUser(UserDetailsImpl userDetails, UpdateUserDTO updateUserDTO) throws IOException {
        Optional<User> userOptional = userRepository.findByName(userDetails.getUsername());
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Mettre à jour le nom d'utilisateur si nécessaire
            user.setName(updateUserDTO.getName());

            // Mettre à jour l'email si nécessaire
            user.setEmail(updateUserDTO.getEmail());

            // Mettre à jour le mot de passe si nécessaire
            if (updateUserDTO.getPassword() != null && !updateUserDTO.getPassword().isEmpty()) {
                user.setPassword(passwordEncoder.encode(updateUserDTO.getPassword()));
            }
            // Sauvegarder l'utilisateur mis à jour dans la base de données
            userRepository.save(user);

            // Retourner les détails de l'utilisateur mis à jour
            return Optional.of(new UserDTO(user.getName(), user.getEmail()));
        }
        return Optional.empty();
    }

        }


