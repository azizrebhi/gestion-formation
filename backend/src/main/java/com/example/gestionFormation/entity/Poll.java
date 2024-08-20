/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.gestionFormation.entity;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * @author klemen
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class Poll implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(cascade = CascadeType.REMOVE, fetch = FetchType.EAGER, mappedBy = "poll")
    private List<Option> options;

    private String title;


    private Date endDate;


    private List<String> ipAdresses = new ArrayList<>();

    private Boolean visible;

    @JsonIgnore
    @ManyToMany(mappedBy = "polls")
    private List<Form> forms;

    public List<Form> getForms() {
        return forms;
    }

    public void setForms(List<Form> forms) {
        this.forms = forms;
    }

    public Long getId() {
        return id;
    }

    public Poll() {
    }

    //this annotation takes care of only returning user's id as json DTO
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    @ManyToOne
    private User user;

    public Poll(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Option> getOptions() {
        return options;
    }

    public void setOptions(List<Option> options) {
        this.options = options;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public List<String> getIpAdresses() {
        if (ipAdresses == null) {
            ipAdresses = new ArrayList<>();
        }
        return ipAdresses;
    }


    public void setIpAdresses(List<String> ipAdresses) {
        this.ipAdresses = ipAdresses;
    }
    public Boolean getVisible() {
        return visible;
    }
    public void setVisible(Boolean visible) {
        this.visible = visible;
    }

}
