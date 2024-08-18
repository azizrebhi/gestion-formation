import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router // Injecting the Router for navigation
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
     
      role: ['', Validators.required], // Ensure role is also required
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value; // correctly defining formValues

      this.authService.register(formValues).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          // Redirect to a login page or other appropriate page
          this.router.navigate(['/login']); // Adjust the navigation path as necessary
        },
        error: (err) => {
          console.error('Registration failed', err);
          // Handle error - show a user-friendly message, etc.
        }
      });
    } else {
      // Mark all controls as touched to trigger validation messages
      this.registerForm.markAllAsTouched();
    }
  }
}