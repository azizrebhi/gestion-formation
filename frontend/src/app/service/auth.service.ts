// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
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
  private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public user$: Observable<any> = this.userSubject.asObservable();

  constructor(private http: HttpClient, private storageService: StorageService) {
    const storedUser = this.storageService.getUser();
    this.userSubject.next(storedUser);
  }
  login(username: string, password: string): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(
      AUTH_API + 'login',
      { username, password },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true }
    ).pipe(
      tap(response => {
        this.storageService.saveUser(response);
        this.userSubject.next(response);
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => new Error(error.error.message || 'Login failed'));
      })
    );
  }
  

  register(formValues: { username: string; email: string; role: string[]; password: string }): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      name: formValues.username,  // Change this to "name" as per backend expectation
      email: formValues.email,
      role: [formValues.role], // Ensure that role is sent as an array
      password: formValues.password
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
    return this.http.post(`${AUTH_API}logout`, {});
  }

  getUserRole(): string | null {
    const user = this.storageService.getUser();
    return user?.roles ? user.roles[0] : null;
  }

  setUser(user: any): void {
    this.userSubject.next(user);
    this.storageService.saveUser(user);
  }

  getUser(): Observable<any> {
    return this.user$;
  }
}
