import { Iusers } from './../../models/iusers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  user: Iusers = {
    username: '',
    email: '',
    password: '',
    rule: false,
  };
  users: Iusers[] = [];
  baseURL: string = 'http://localhost:3005/users';

  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<Iusers[]> {
    return this.http.get<Iusers[]>(this.baseURL);
  }

  login(email: string, password: string) {
    this.getAll().subscribe({
      next: (data) => {
        this.users = data;

        var using = this.users.find(
          (u) => u.email == email && u.password == password
        );

        if (using !== undefined) {
          this.user = using;
          if (this.user.rule) {
            this.router.navigate(['/dashboard']);
          } else this.router.navigate(['/products']);
        } else {
          this.router.navigate(['/notfound']);
        }
      },
    });
  }

  get isAuthenticated() {
    return this.user?.rule;
  }

  logout() {
    this.user = {
      username: '',
      email: '',
      password: '',
      rule: false,
    };
  }
}
