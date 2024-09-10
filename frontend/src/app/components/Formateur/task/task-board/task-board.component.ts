// TaskBoardComponent

import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Model/Task.model';
import { TaskServiceService } from 'src/app/service/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {
  tasks: Task[] = [];
  todoTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  doneTasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(
    private taskService: TaskServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  // Fetch tasks and categorize them
  getTasks(): void {
    this.taskService.getAllTasks().subscribe(
      (tasks) => {
        this.tasks = tasks;
        this.categorizeTasks();
      },
      (error) => {
        console.error('Error fetching tasks', error);
      }
    );
  }

  // Categorize tasks into ToDo, InProgress, and Done
  categorizeTasks(): void {
    this.todoTasks = this.tasks.filter(task => task.status === 'TODO');
    this.inProgressTasks = this.tasks.filter(task => task.status === 'IN_PROGRESS');
    this.doneTasks = this.tasks.filter(task => task.status === 'DONE');
  }

  // Add new task and categorize it
  addTask(newTask: Task): void {
    this.taskService.createTask(newTask).subscribe(
      (createdTask: Task) => {
        this.tasks.push(createdTask);  // Add task to the tasks array
        this.categorizeTasks();        // Re-categorize tasks
      },
      (error) => {
        console.error('Error adding task', error);
      }
    );
  }

  // Open modal for adding a new task
  openTaskModal(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((newTask: Task) => {
      if (newTask) {
        this.addTask(newTask);  // Add the newly created task
      }
    });
  }
  
  // Update task status
  updateTaskStatus(task: Task, status: 'TODO' | 'IN_PROGRESS' | 'DONE'): void {
    const updatedTask = { ...task, status: status };
    this.taskService.updateTask(updatedTask.id!, updatedTask).subscribe(
      () => {
        this.getTasks();  // Refresh tasks after status update
      },
      (error) => {
        console.error('Error updating task', error);
      }
    );
  }

  // Delete a task
  deleteTask(taskId: number): void {
    const taskToDelete = this.doneTasks.find(task => task.id === taskId);
  
    if (taskToDelete) {
      this.doneTasks = this.doneTasks.filter(task => task.id !== taskId);
      this.taskService.addCompletedTask(taskToDelete); // Save the task in the service
    }}
  
}
