import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Form} from "./form";


@Injectable({
  providedIn: 'root'
})
export class FormService {

  private baseUrl = 'http://localhost:8080/api/v1/form';

  constructor(private http: HttpClient) { }

  getForms(formId: string): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  getFormById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createForm(form: Form): Observable<any> {
    return this.http.post(this.baseUrl, form, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteForm(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
