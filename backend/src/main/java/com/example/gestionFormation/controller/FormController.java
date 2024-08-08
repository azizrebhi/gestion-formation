package com.example.gestionFormation.controller;

import com.example.gestionFormation.Service.FormService;
import com.example.gestionFormation.Service.FormateurService;
import com.example.gestionFormation.entity.Form;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping(path="api/v1/form")
public class FormController {
    private final FormService formService;
    @Autowired
    public FormController(FormService formService){
        this.formService=formService;
    }
    @PostMapping
    public Form createForm(@RequestBody Form form) {
        return formService.saveForm(form);
    }

    @GetMapping("/{id}")
    public Form getFormById(@PathVariable Long id) {
        return formService.getFormById(id);
    }

}
