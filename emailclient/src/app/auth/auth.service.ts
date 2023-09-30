import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  AuthForm,
  SignedinResponse,
  SigninResponse,
  SignupResponse,
  UsernameResponse,
} from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://api.angular-email.com';
  authenticated$ = new BehaviorSubject<boolean | null>(null);
  username = '';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameResponse>(this.baseUrl + '/auth/username', {
      username,
    });
  }

  signin(data: Partial<AuthForm>) {
    return this.http
      .post<SigninResponse>(this.baseUrl + '/auth/signin', data)
      .pipe(
        tap(({ username }) => {
          this.authenticated$.next(true);
          this.username = username;
        })
      );
  }

  signup(data: Partial<AuthForm>) {
    return this.http
      .post<SignupResponse>(this.baseUrl + '/auth/signup', data)
      .pipe(
        tap(({ username }) => {
          this.authenticated$.next(true);
          this.username = username;
        })
      );
  }

  checkAuth() {
    return this.http
      .get<SignedinResponse>(this.baseUrl + '/auth/signedin')
      .pipe(
        tap(({ authenticated, username }) => {
          this.authenticated$.next(authenticated);
          this.username = username;
        })
      );
  }

  signout() {
    return this.http
      .post(this.baseUrl + '/auth/signout', {})
      .pipe(tap(() => this.authenticated$.next(false)));
  }
}
