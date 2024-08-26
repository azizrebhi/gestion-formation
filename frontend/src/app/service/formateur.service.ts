import { Injectable } from '@angular/core';
import { Formateur } from '../Model/formateur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private baseUrl = 'http://localhost:8086/academie/api/formateurs' // Update with your API base URL

  constructor(private http: HttpClient) {}

  getAllFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(`${this.baseUrl}/all_formateurs`);
  }
  getFormateurById(id: number): Observable<Formateur> {
    return this.http.get<Formateur>(`${this.baseUrl}/${id}`);
  }
  createFormateur(languageId: number, formateur: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(`${this.baseUrl}/addFormateur/${languageId}`, formateur);
  }
  
  updateFormateur(formateurId: number, languageId: number, formateur: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>(`${this.baseUrl}/update/${formateurId}?languageId=${languageId}`, formateur);
  }
  

  deleteFormateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
 

  getFormateursByLanguage(languageId: number): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(`${this.baseUrl}/by-language?languageId=${languageId}`);
  }
}

