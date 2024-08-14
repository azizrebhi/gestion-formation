import { Injectable } from '@angular/core';
import { Formateur } from '../Model/formateur.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private apiUrl = 'http://localhost:8086/academie/api/formateurs' // Update with your API base URL

  constructor(private http: HttpClient) {}

  getAllFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(`${this.apiUrl}/all_formateurs`);
  }
  getFormateurById(id: number): Observable<Formateur> {
    return this.http.get<Formateur>(`${this.apiUrl}/${id}`);
  }

  createFormateur(formateur: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(`${this.apiUrl}/addFormateur`, formateur);
  }
  updateFormateur(id: number, formateur: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>(`${this.apiUrl}/updateFormateur/${id}`, formateur);
  }

  deleteFormateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

