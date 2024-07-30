import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
const API_URL = 'http://localhost:8086/api/';
const API_URL1 = 'http://localhost:8086/api/auth';
const TEST_URL = API_URL + 'test/';
const USERS_URL = API_URL + 'users/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private authService: AuthService,
    private storageService: StorageService) { }
    // Fonction pour obtenir l'en-tête d'autorisation
  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken() || this.getTokenFromStorage();

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);

    }

    return headers;
  }
   // Récupère le jeton depuis le service de stockage
   private getTokenFromStorage(): string | null {
    const user = this.storageService.getUser();
    return user?.token || null;
  }
 // Requête pour obtenir le contenu de l'utilisateur
 getUserBoard(): Observable<string> {
  return this.http.get(TEST_URL + 'user', { headers: this.getHeaders(), responseType: 'text' });
}

// Requête pour obtenir le tableau du développeur
getFormateurBoard(): Observable<string> {
  return this.http.get(TEST_URL + 'formateur', { headers: this.getHeaders(), responseType: 'text' });
}

// Requête pour obtenir le tableau de l'administrateur
getAdminBoard(): Observable<string> {
  return this.http.get(TEST_URL + 'admin', { headers: this.getHeaders(), responseType: 'text' });
}
}
