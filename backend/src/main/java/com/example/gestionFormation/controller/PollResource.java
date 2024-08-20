/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.gestionFormation.controller;

import com.example.gestionFormation.Service.PollService;
import com.example.gestionFormation.entity.Poll;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.List;

/**
 *
 * @author klemen
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/polls")
public class PollResource {

    @Autowired
    private PollService pollService;

    @GetMapping()
    public List<Poll> list() {
        return pollService.getAll();
    }

    @GetMapping("/user/{username}")

    public List<Poll> getUserPolls(@PathVariable String username, Principal p) {
        
        if (username.equals(p.getName())) {
            return pollService.getAllForUser(username);
        } else {
            return pollService.getAllVisibleForUser(username);
        }
    }

    @GetMapping("/{id}")
    public Poll get(@PathVariable String id) {
        return pollService.getPollById(Long.parseLong(id));
    }

    @PutMapping("/{id}")

    public ResponseEntity<?> put(@PathVariable Long id, @RequestBody Poll poll) {
        poll.setId(id);
        Poll updatePoll = pollService.updatePoll(poll);
        return ResponseEntity.ok(updatePoll);

    }
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)

    public ResponseEntity<?> post(@RequestBody Poll poll) {
        Poll savedPoll = pollService.savePoll(poll);
        return ResponseEntity.status(201).body(savedPoll);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        pollService.deletePollById(id);
        return ResponseEntity.status(204).build();

    }

}
