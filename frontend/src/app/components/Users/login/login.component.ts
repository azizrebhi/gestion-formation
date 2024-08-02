import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Vérifiez si l'utilisateur est déjà connecté
    if (sessionStorage.getItem('user')) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // Vous pouvez aussi stocker les rôles et d'autres informations de l'utilisateur si nécessaire
        this.roles = data.roles;
        this.router.navigate(['homeFormateur']); // Redirigez l'utilisateur vers la page d'accueil ou une autre page après connexion
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
}
