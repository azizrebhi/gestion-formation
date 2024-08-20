import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8086/academie/api/courses'; // Adjust the URL to your backend

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all_courses`);
  }
  getCourseWithLanguagesAndFormateursById(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${courseId}/languages-and-formateurs`);
  }

  getCourseWithLanguagesAndFormateursByName(courseName: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/by-name/${courseName}/languages-and-formateurs`);
  }
}
