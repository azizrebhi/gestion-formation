package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Task;
import com.example.gestionFormation.repositries.TaskRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
    }

    public Task updateTask(Long id, Task updatedTask) {
        Task task = getTaskById(id);
        task.setTitle(updatedTask.getTitle());
        task.setStartDate(updatedTask.getStartDate());
        task.setEndDate(updatedTask.getEndDate());
        task.setMode(updatedTask.getMode());
        task.setTeam(updatedTask.getTeam());
        task.setStatus(updatedTask.getStatus());
        return taskRepository.save(task);
    }
    public Page<Task> getAllTasks(Pageable pageable) {
        return taskRepository.findAll(pageable);
    }
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}