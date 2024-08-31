package com.example.gestionFormation.secServices.service;


import com.example.gestionFormation.entities.Form;
import com.example.gestionFormation.entities.Poll;

import com.example.gestionFormation.repositries.FormRepository;
import com.example.gestionFormation.repositries.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FormService {

    @Autowired
    private FormRepository formRepository;
    @Autowired
    private PollRepository pollRepository;
    public List<Form> getAllForms() {
        return formRepository.findAll();
    }

    public Form createForm(String title, List<Long> pollIds) {
        Form form = new Form();
        form.setTitle(title);

        List<Poll> polls = pollRepository.findAllById(pollIds);
        form.setPolls(polls);

        // Since Poll is the owning side of the relationship, you need to update it as well
        for (Poll poll : polls) {
            if (poll.getForms() == null) {
                poll.setForms(new ArrayList<>());
            }
            poll.getForms().add(form);
        }

        return formRepository.save(form);
    }

    public Form getFormById(Long id) {
        return formRepository.findById(id).orElse(null);
    }

    public void deleteForm(Long id) {
        formRepository.deleteById(id);
    }

}
