package com.example.gestionFormation.repositries;

import com.example.gestionFormation.entities.Task;
import com.example.gestionFormation.enumeration.TaskStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

}
