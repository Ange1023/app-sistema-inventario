import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router class
import { AuthService } from '../../services/auth.service'; // Import the AuthService class

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }

  login(username: string, password: string): void {
    this.authService.login(username, password).subscribe({
      next: (success) => {
        console.log('Login successful');
        this.router.navigate(['/productos']);
      },
      error: (error) => {
        console.log('Login failed', error);
        alert('Login failed');
      }
    });
  }

  
}
