package com.example.gestionFormation.entities;

import com.example.gestionFormation.enumeration.TaskStatus;
import com.fasterxml.jackson.databind.DatabindException;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity

public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;


    private Date startDate;


    private Date endDate;


    private String mode;


    private String team;

    @Enumerated(EnumType.STRING)
    private TaskStatus status;



    // Constructors, Getters, and Setters

    public Task() {
    }

    public Task(String title, Date startDate, Date endDate, String mode, String team, TaskStatus status) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.mode = mode;
        this.team = team;
        this.status = status;

    }

    // Getters and Setters...
}
