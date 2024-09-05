import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  newData: any = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  addData(newData: any): void {
    this.http.post('http://localhost:3000/api/addData', newData).subscribe(
      response => {
        // Handle successful data addition
        console.log(response);
        this.router.navigate(['/signin']);
      },
      error => {
        // Handle data addition error
        console.error(error);
      }
    );
  }
}