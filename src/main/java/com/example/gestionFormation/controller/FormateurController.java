package com.example.gestionFormation.controller;

import com.example.gestionFormation.Service.FormateurService;
import com.example.gestionFormation.entity.Formateur;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping(path="api/v1/formateur")
public class FormateurController {

 private final FormateurService formateurService;
 @Autowired
 public FormateurController(FormateurService formateurService){
  this.formateurService=formateurService;
 }
 @GetMapping
 public List<Formateur> getFormateur() {
  return formateurService.getFormateur();
 }
 @PostMapping
 public void registerNewformateur(@RequestBody Formateur formateur){
  formateurService.addNewformateur(formateur);}
  @DeleteMapping(path="{formateurId}")
  public void deleteFormateur(@PathVariable("formateurId") Long formateurId){
  formateurService.deleteFormateur(formateurId);
  }
@PutMapping(path="{formateurId}")
public void updateformateur(@PathVariable("formateurId") Long formateurId,
           @RequestParam(required=false) String name,
                            @RequestParam(required=false) String email){  formateurService.updateformateur(formateurId, name,email);}}
