import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Form} from "./Form";



@Injectable({
  providedIn: 'root'
})
export class FormService {

  private baseUrl = 'http://localhost:8086/academie/api/v1/form';

  constructor(private http: HttpClient) { }

  getForms(): Observable<any> {

    return this.http.get(this.baseUrl);
  }
  getFormById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createForm(form: { title: string, pollIds: number[] }): Observable<Form> {
    return this.http.post<Form>(`${this.baseUrl}`, form);
  }

  deleteForm(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  voteOnForm(id: string, votes: { pollId: number, selectedOptionId: number }[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/vote`, votes);
  }
}
