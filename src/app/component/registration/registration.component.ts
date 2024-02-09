import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { user } from '../../model/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private router: Router, private serv: AuthService) { }

reg: user = new user();

onSubmit() {
  if (!this.isEmailValid(this.reg.email)) {
    alert("Invalid email format.");
    return; // Stop further execution if email format is invalid
  }

  if (this.reg.password !== this.reg.confirmPassword) {
    alert("Passwords do not match.");
    return; // Stop further execution if passwords do not match
  }

  console.log(this.reg);
  this.serv.addUser(this.reg).subscribe({
    next: (data) => {
      console.log(data);
    },
    error: (err) => alert(err.message),
    complete: () => alert('completed'),
  });

  this.router.navigateByUrl('/');
}

private isEmailValid(email: string): boolean {
  // Use Angular's built-in email validator
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

}
