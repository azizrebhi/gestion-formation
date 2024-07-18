package com.example.gestionFormation.services;

import com.example.gestionFormation.config.PasswordConfig;
import com.example.gestionFormation.entity.Role;
import com.example.gestionFormation.entity.User;
import com.example.gestionFormation.repositries.RoleRepository;
import com.example.gestionFormation.repositries.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.management.relation.RoleNotFoundException;
import java.util.ArrayList;

@Service
public class UserServiceImp implements IUserService,UserDetailsService {
    @Autowired
     RoleRepository roleRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
     PasswordEncoder passwordEncoder;

    public void saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    public void addRoleToUser(String email, String roleName) throws RoleNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User with email " + email + " not found"));
        Role role = roleRepository.findByName(roleName)
                .orElseThrow(() -> new RoleNotFoundException("Role " + roleName + " not found"));

        if (!user.getRole().contains(role)) {
            user.getRole().add(role);
            userRepository.save(user);
        }
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return new org.springframework.security.core.userdetails.User(user.getName(), user.getPassword(), new ArrayList<>());
    }
}