package com.example.gestionFormation.controller;
import com.example.gestionFormation.entity.Poll;
import com.example.gestionFormation.Service.FormService;
import com.example.gestionFormation.Service.PollService;
import com.example.gestionFormation.entity.Form;
import com.example.gestionFormation.playloads.CreateFormRequest;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping(path="api/v1/form")
public class FormController {
    @Autowired
    private PollService pollService;
    @Autowired
    private FormService formService;
    @GetMapping
    public List<Form> getAllForms() {
        return formService.getAllForms();
    }
    @PostMapping
    public ResponseEntity<Form> createForm(@RequestBody CreateFormRequest request) {
        Form form = formService.createForm(request.getTitle(), request.getPollIds());
        return ResponseEntity.ok(form);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Form> getFormById(@PathVariable Long id) {
        Form form = formService.getFormById(id);
        if (form == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(form);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteForm(@PathVariable Long id) {
        formService.deleteForm(id);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/{id}/vote")
    public ResponseEntity<?> voteOnForm(@PathVariable Long id,
                                        @RequestBody List<Map<String, Long>> votes,
                                        HttpServletRequest request) {
        String ipAddress = request.getRemoteAddr();

        for (Map<String, Long> vote : votes) {
            Long pollId = vote.get("pollId");
            Long optionId = vote.get("selectedOptionId");

            try {
                pollService.vote(pollId, optionId, ipAddress);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
            }
        }

        return ResponseEntity.ok("Votes submitted successfully.");
    }


}


