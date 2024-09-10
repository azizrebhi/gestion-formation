import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Model/Task.model';
import { TaskServiceService } from 'src/app/service/task.service';

@Component({
  selector: 'app-historic-task',
  templateUrl: './historic-task.component.html',
  styleUrls: ['./historic-task.component.css']
})
export class HistoricTaskComponent implements OnInit {
  @Input() completedTasks: Task[] = [];

  constructor(private taskService: TaskServiceService) {}
  ngOnInit(): void {
    this.completedTasks = this.taskService.getCompletedTasks(); // Load completed tasks
  }
}
