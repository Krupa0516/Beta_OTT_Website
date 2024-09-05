import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private dataService: DataService) {}

  login(username: string, password: string): void {
    
    const isValidUser = this.dataService.login(username, password);

    if (isValidUser) {
      this.router.navigate(['/home']);
    } else {
      console.log('Invalid username or password');
    }
  }
}
