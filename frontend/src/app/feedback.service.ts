import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private apiUrl = 'http://localhost:8080/api/v1/feedback'; // Update with your API URL

  constructor(private http: HttpClient) {}

  getAverageEffectivenessRating(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/average-effectiveness-rating`);
  }

  getAverageKnowledgeRating(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/average-knowledge-rating`);
  }

  getAverageEngagementRating(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/average-engagement-rating`);
  }

  getAverageClarityRating(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/average-clarity-rating`);
  }

  getAverageResponsivenessRating(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/average-responsiveness-rating`);
  }
}
