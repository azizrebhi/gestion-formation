import { Component, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Task } from 'src/app/Model/Task.model';
import { TaskServiceService } from 'src/app/service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  task: Task = {
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    mode: 'Presentiel',
    team: '',
    status: 'TODO'
  };

  constructor(private taskService: TaskServiceService,
     private router: Router,
     public dialogRef: MatDialogRef<AddTaskComponent>
    ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.task.status = 'TODO';  // Set the default status to 'TODO'
      this.taskService.createTask(this.task).subscribe({
        next: (response) => {
          console.log('Task added successfully', response);
          this.dialogRef.close(response);  // Pass the created task back to the TaskBoardComponent
        },
        error: (error) => {
          console.error('Error adding task', error);
        }
      });
    }
  }
  

  onCancel() {
    this.dialogRef.close();
  }
}