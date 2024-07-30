import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  deleteFormation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/formations/${id}`, { responseType: 'text' });
  }

  addFormation(formation: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addFormation`, formation);
  }
}
