import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  AuthForm,
  SignedinResponse,
  SigninResponse,
  SignupResponse,
  UsernameResponse,
} from './auth.model';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://api.angular-email.com';
  authenticated$ = new BehaviorSubject<boolean | null>(null);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameResponse>(this.baseUrl + '/auth/username', {
      username,
    });
  }

  signin(data: Partial<AuthForm>) {
    return this.http
      .post<SigninResponse>(this.baseUrl + '/auth/signin', data)
      .pipe(tap(() => this.authenticated$.next(true)));
  }

  signup(data: Partial<AuthForm>) {
    return this.http
      .post<SignupResponse>(this.baseUrl + '/auth/signup', data)
      .pipe(tap(() => this.authenticated$.next(true)));
  }

  checkAuth() {
    return this.http
      .get<SignedinResponse>(this.baseUrl + '/auth/signedin')
      .pipe(tap((val) => this.authenticated$.next(val.authenticated)));
  }

  signout() {
    return this.http
      .post(this.baseUrl + '/auth/signout', {})
      .pipe(tap(() => this.authenticated$.next(false)));
  }
}
