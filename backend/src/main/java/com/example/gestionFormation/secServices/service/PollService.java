/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Form;
import com.example.gestionFormation.entities.Option;
import com.example.gestionFormation.entities.Poll;

import com.example.gestionFormation.entities.User;
import com.example.gestionFormation.repositries.FormRepository;
import com.example.gestionFormation.repositries.OptionRepository;
import com.example.gestionFormation.repositries.PollRepository;
import com.example.gestionFormation.repositries.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
/**
 *
 * @author klemen
 */
@Service
public class PollService {
    private final PollRepository pollRepository;
    private final OptionRepository optionRepository;

    private final FormRepository formRepository;
    private final UserRepository userRepository;
    @Autowired
    public PollService(PollRepository pollRepository, OptionRepository optionRepository, FormRepository formRepository, UserRepository userRepository) {
        this.pollRepository = pollRepository;
        this.optionRepository = optionRepository;
        this.formRepository = formRepository;
        this.userRepository = userRepository;
    }
    @Transactional
    public Poll savePoll(Poll poll) {
        poll.setUser(null);
        Poll savedPoll = pollRepository.save(poll);
        poll.getOptions().stream().forEach(option -> {
            option.setPoll(savedPoll);
            optionRepository.save(option);
        });
        return savedPoll;
    }
    @Transactional
    public Poll updatePoll(Poll poll) {
        optionRepository.deleteByPollId(poll.getId());
        Poll savedPoll = pollRepository.save(poll);
        poll.getOptions().stream().forEach(option -> {
            option.setPoll(savedPoll);
            optionRepository.save(option);
        });
        return savedPoll;
    }

    public List<Poll> getAll() {
        return pollRepository.findAll();
    }
    public Poll getPollById(Long id) {
        return pollRepository.getOne(id);
    }
    public void deletePollById(Long id) {
        pollRepository.deleteById(id);
    }
    @Transactional
    public void vote(Long formId, Long pollId, Long optionId, String ip) throws Exception {
        Form form = formRepository.findById(formId)
                .orElseThrow(() -> new Exception("Form not found"));
        Poll poll = pollRepository.findById(pollId)
                .orElseThrow(() -> new Exception("Poll not found"));
        // Check if the IP has already voted in this form
        List<Option> options = poll.getOptions().stream()
                .filter(option -> Objects.equals(option.getId(), optionId))
                .collect(Collectors.toList());

        if (options.size() == 1) {
            Option option = options.get(0);
            option.setScore(option.getScore() + 1);
            optionRepository.save(option);
            // Save the IP address for this form
            form.getIpAddresses().add(ip);
            formRepository.save(form);
        } else {
            throw new Exception("Option id for poll not unique!");
        }
    }

    public List<Poll> getAllForUser(String username) {
        User user = userRepository.findOneByName(username);
        return pollRepository.findAllByUser(user);
    }
    public List<Poll> getAllVisibleForUser(String username) {
        User user = userRepository.findOneByName(username);
        return pollRepository.findAllByUserAndVisible(user, true);
    }
}






