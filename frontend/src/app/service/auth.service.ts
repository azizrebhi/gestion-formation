import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JwtResponse } from '../Model/JwtResponse';
import { StorageService } from './storage.service';

const AUTH_API = 'http://localhost:8086/academie/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storageService: StorageService) {}

  login(username: string, password: string): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(
      AUTH_API + 'login',
      { username, password },
      httpOptions
    )
    .pipe(
      tap(response => {
        this.storageService.saveUser({
          token: response.token,
          id: response.id,
          username: response.username,
          email: response.email,
          roles: response.roles
        });
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => new Error(error.error.message || 'Login failed'));
      })
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username,
      email,
      password
    }, httpOptions);
  }

  getToken(): string | null {
    const user = this.storageService.getUser();
    return user?.token || null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): Observable<any> {
    this.storageService.clean();
    return this.http.post(AUTH_API + 'logout', {}, httpOptions);
  }
}
