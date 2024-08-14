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
        // Check for existing username and email
        if (userRepository.existsByName(signUpRequest.getName())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
        }

        // Check if roles are provided
        Set<String> strRoles = signUpRequest.getRole();
        if (strRoles == null || strRoles.isEmpty()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Role is required!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getName(), signUpRequest.getEmail(), passwordEncoder.encode(signUpRequest.getPassword()));

        // Assign roles
        Set<Role> roles = new HashSet<>();
        strRoles.forEach(role -> {
            switch (role.toUpperCase()) { // Ensure case insensitivity
                case "ROLE_ADMIN":
                    Role adminRole = roleRepository.findByName(EnumRole.ROLE_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role ADMIN is not found."));
                    roles.add(adminRole);
                    break;
                case "ROLE_FORMATEUR":
                    Role formateurRole = roleRepository.findByName(EnumRole.ROLE_FORMATEUR)
                            .orElseThrow(() -> new RuntimeException("Error: Role FORMATEUR is not found."));
                    roles.add(formateurRole);
                    break;
                case "ROLE_MANAGER":
                    Role managerRole = roleRepository.findByName(EnumRole.ROLE_MANAGER)
                            .orElseThrow(() -> new RuntimeException("Error: Role MANAGER is not found."));
                    roles.add(managerRole);
                    break;
                default:
                    throw new RuntimeException("Error: Role " + role + " is not valid.");
            }
        });

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
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



}





