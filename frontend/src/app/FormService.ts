// form.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Form} from "./form";


@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:8080/api/v1/form'; // Adjust the URL as necessary

  constructor(private http: HttpClient) {}

  createForm(form: Form): Observable<Form> {
    return this.http.post<Form>(this.apiUrl, form);
  }
  getFormById(id: number): Observable<Form> {
    return this.http.get<Form>(`${this.apiUrl}/${id}`);
  }
}
