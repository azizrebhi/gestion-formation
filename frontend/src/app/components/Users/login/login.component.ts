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

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/homeFormateur']); // Redirect to a different page after login
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Login failed';
        this.isLoginFailed = true;
        if (err.status === 401) {
          // Specific handling for unauthorized error
          alert('Username or password is incorrect. Please try again.');
        } else {
          // Handle other types of errors
          alert(this.errorMessage);
        }
      }
    });
  }
}
