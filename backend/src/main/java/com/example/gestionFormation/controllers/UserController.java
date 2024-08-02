package com.example.gestionFormation.controllers;

import com.example.gestionFormation.dto.UpdateUserDTO;
import com.example.gestionFormation.dto.UserDTO;
import com.example.gestionFormation.entities.User;
import com.example.gestionFormation.payload.response.MessageResponse;
import com.example.gestionFormation.repositries.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;



    @GetMapping("/{username}")
    public ResponseEntity<?> getUserDetails(@PathVariable String username) {
        Optional<User> userOpt = userRepository.findByName(username);
        if (!userOpt.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new MessageResponse("Error: User not found."));
        }

        User user = userOpt.get();
        UserDTO userDTO = new UserDTO(user.getName(), user.getEmail());

        return ResponseEntity.ok(userDTO);
    }
    @PutMapping("/{username}")
    public ResponseEntity<?> updateUserDetails(@PathVariable String username, @RequestBody UpdateUserDTO updateUserDTO) {
        Optional<User> userOpt = userRepository.findByName(username);
        if (!userOpt.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new MessageResponse("Error: User not found."));
        }
        User user = userOpt.get();
        user.setName(updateUserDTO.getName());
        user.setEmail(updateUserDTO.getEmail());
        if (updateUserDTO.getPassword() != null && !updateUserDTO.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(updateUserDTO.getPassword()));
        }

        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User details updated successfully."));
    }

    @GetMapping("/")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<User> users = userRepository.findAll();
        List<UserDTO> userDTOs = users.stream()
                .map(user -> new UserDTO(user.getName(), user.getEmail()))
                .collect(Collectors.toList());

        return ResponseEntity.ok(userDTOs);
    }
}
