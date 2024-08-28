import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demand } from '../Model/demand.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private baseUrl = 'http://localhost:8086/academie/api/demands';  // Adjust this URL based on your API

  constructor(private http: HttpClient) {}

  submitDemande(demande: Demand): Observable<any> {
    return this.http.post(this.baseUrl, demande);
  }
  deleteDemande(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateDemande(id: number, demande: Demand): Observable<Demand> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Demand>(url, demande);
  }
  
  getAllDemandes(): Observable<Demand[]> {
    return this.http.get<Demand[]>(`${this.baseUrl}/all_demands`);
}}