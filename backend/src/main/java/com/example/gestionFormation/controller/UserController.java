package com.example.gestionFormation.controller;

import com.example.gestionFormation.Repository.UserRepository;
import com.example.gestionFormation.Service.UserService;
import com.example.gestionFormation.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
    private UserRepository userRepository;

    @GetMapping("getAll")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> ListUser = userService.getAllUser();
        return ResponseEntity.ok(ListUser);
    }


    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User existingUser = userService.createdUser(user);
        return ResponseEntity.ok(existingUser);

    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        user.setId(id); // Assure que l'id est défini pour la mise à jour
        return userService.saveUser(user);
    }


    @DeleteMapping("delete/{userid}")
    public ResponseEntity<List<User>> deleteUser(@PathVariable Long userid) {
        List<User> ListUser = userService.deleteUser(userid);
        return ResponseEntity.ok(ListUser);
    }


}
