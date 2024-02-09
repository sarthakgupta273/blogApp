import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { user } from '../../model/user';
import { AuthService } from '../../service/auth.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router, private dataService: DataService) {
  }
  data= {
    username : '',
    password : ''
  };
  onSubmit() {
    

    console.log(this.data);

    this.authService.loginUser(this.data).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.error(err);
        alert('Wrong id or password')
      },
      complete: () => {
        console.log('Login completed');
        this.router.navigate(['/post']);
        this.authService.login();
      },
    });

    
  }
}

