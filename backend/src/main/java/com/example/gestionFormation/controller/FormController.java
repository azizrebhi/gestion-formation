package com.example.gestionFormation.controller;

import com.example.gestionFormation.Service.FormService;
import com.example.gestionFormation.Service.FormateurService;
import com.example.gestionFormation.entity.Form;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping(path="api/v1/form")
public class FormController {
    @Autowired
    private FormService formService;
    @GetMapping
    public List<Form> getAllForms() {
        return formService.getAllForms();
    }
    @PostMapping
    public Form createForm(@RequestBody Form form) {
        return formService.saveForm(form);
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
}
