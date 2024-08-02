package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Formateur;
import com.example.gestionFormation.repositries.FormateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormateurServiceImpl implements IFormateurService{
    @Autowired
    FormateurRepository formateurRepository;

    @Override
    public List<Formateur> getAllFormateurs() {
        return formateurRepository.findAll();
    }

    @Override
    public Formateur getFormateurById(Long id) {
        return formateurRepository.findById(id).orElse(null);
    }

    @Override
    public Formateur createFormateur(Formateur formateur) {
        return formateurRepository.save(formateur);
    }

    @Override
    public void deleteFormateur(Long id) {
        formateurRepository.deleteById(id);
    }
}
