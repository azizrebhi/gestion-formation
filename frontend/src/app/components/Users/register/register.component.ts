import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {
    username: '',
    email: '',
    password: ''
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  onSubmit(): void {
    this.authService.register(this.user.username, this.user.email, this.user.password).subscribe({
      next: data => {
        this.toastr.success('Registration successful!');
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login']);  // Navigate to login page after successful registration
      },
      error: err => {
        this.toastr.error('Registration failed. Please try again.');
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
