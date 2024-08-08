package com.example.gestionFormation.Service;

import com.example.gestionFormation.Repository.FormRepository;
import com.example.gestionFormation.Repository.FormateurRepository;
import com.example.gestionFormation.entity.Form;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class FormService {

    public final FormRepository formRepository;
    @Autowired
    public FormService(FormRepository formRepository ){
        this.formRepository=formRepository;
    }
    public Form saveForm(Form form) {
        return formRepository.save(form);
    }

    public Form getFormById(Long id) {
        return formRepository.findById(id).orElse(null);
    }



}
