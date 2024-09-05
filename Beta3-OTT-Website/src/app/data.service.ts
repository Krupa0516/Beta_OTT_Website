import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userData: UserData[] = [];

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  private fetchData(): void {
    this.http.get<UserData[]>('http://localhost:3000/api/userData').subscribe(
      (data: UserData[]) => {
        this.userData = data;
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  login(name: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      setTimeout(() => {
        const isValidUser = this.checkLogin(name, password);
        observer.next(isValidUser);
        observer.complete();
      }, 500);
    });
  }

  private checkLogin(name: string, password: string): boolean {
    for (const user of this.userData) {
      if (user.name === name && user.password === password) {
        return true;
      }
    }
    return false;
  }
}
