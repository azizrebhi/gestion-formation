package com.example.gestionFormation.Service;

import com.example.gestionFormation.Repository.FormRepository;
import com.example.gestionFormation.Repository.FormateurRepository;
import com.example.gestionFormation.entity.Form;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class FormService {

    @Autowired
    private FormRepository formRepository;

    public List<Form> getAllForms() {
        return formRepository.findAll();
    }

    public Form saveForm(Form form) {
        return formRepository.save(form);
    }

    public Form getFormById(Long id) {
        return formRepository.findById(id).orElse(null);
    }

    public void deleteForm(Long id) {
        formRepository.deleteById(id);
    }

}
