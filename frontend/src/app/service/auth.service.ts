import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { StorageService } from './storage.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
interface AuthResponse {
  token: string;  // Ajoutez le type attendu pour le token ici
  // Ajoutez d'autres champs si nécessaire
}

const AUTH_API = 'http://localhost:8086/academie/api/auth/';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storageService: StorageService ) {}



  login(username: string, password: string): Observable<any> {
    return this.http.post<AuthResponse>(
      AUTH_API + 'login',
      { username, password },
      httpOptions
    )
      .pipe(
        tap(response => {
          // Enregistrez les informations de l'utilisateur dans le sessionStorage
          this.storageService.saveUser({ token: response.token });
        }),
        catchError(error => {
          // Gérez les erreurs de connexion, si nécessaire
          console.error('Login error:', error);
          throw error;
        })
      );

  }
  register(username: string, email: string, password: string): Observable<any> {
    // Créez un FormData pour inclure les données de la requête et le fichier
    const formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    

    // Effectuez la requête POST
    return this.http.post(AUTH_API + 'register', formData);
  }
  getToken(): string | null {
    // Obtenez le token depuis le sessionStorage
    const user = this.storageService.getUser();
    return user?.token || null;
  }

  isLoggedIn(): boolean {
    // Vérifiez si l'utilisateur est connecté en fonction du token
    return !!this.getToken();
  }
  logout(): Observable<any> {
    // Supprimez les informations de l'utilisateur du sessionStorage lors de la déconnexion
    this.storageService.clean();
    return this.http.post(AUTH_API + 'logout', {}, httpOptions);
  }

}
