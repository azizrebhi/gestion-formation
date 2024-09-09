import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Model/Task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private apiUrl = 'http://localhost:8086/academie/api/tasks';  // Your backend URL

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Get all tasks
  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Get task by ID
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }
 // Create a new task with Authorization header
 createTask(task: Task): Observable<Task> {
  const token = this.authService.getToken(); // Fetch the JWT token from your auth service
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`, // Add the token here
    'Content-Type': 'application/json' // Ensure you're sending JSON data
  });
  return this.http.post<Task>(`${this.apiUrl}/addTask`, task, { headers });
}

  // Update an existing task
  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  // Delete a task
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
