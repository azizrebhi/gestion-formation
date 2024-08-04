import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {
    username: '',
    password: ''
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      user => {
        const role = this.authService.getUserRole();
        switch (role) {
          case 'ROLE_ADMIN':
            this.router.navigate(['/homeAdmin']);
            break;
          case 'ROLE_FORMATEUR':
            this.router.navigate(['/homeFormateur']);
            break;
         
          default:
            console.error('Unknown role', role);
            break;
        }
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = error.error.message || 'Login failed';
        this.isLoginFailed = true;
        alert(this.errorMessage);
      }
    );
  }
}
