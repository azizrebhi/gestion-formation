/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.gestionFormation.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

/**
 *
 * @author klemen
 */
@Entity
public class Option implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String option;
    
    private Long score = 0L;

    public Option() {
    }

    public Option(String value) {
        this.option = value;
    }
    
    @ManyToOne
    @JsonIgnore
    private Poll poll;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Poll getPoll() {
        return poll;
    }

    public void setPoll(Poll poll) {
        this.poll = poll;
    }

    public Long getScore() {
        return score;
    }

    public void setScore(Long score) {
        this.score = score;
    }
     

    public String getOption() {
        return option;
    }

    public void setOption(String value) {
        this.option = value;
    }
    
    
    
}
