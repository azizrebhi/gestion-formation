import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../Model/Language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:8086/academie/api/courses';
  private url='http://localhost:8086/academie/api/languages';

  getLanguagesByCourse(courseId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${courseId}/languages`);
  }

    getAllLanguages(): Observable<Language[]> {
      return this.http.get<Language[]>(`${this.url}/all_languages`);
    }
  
}
