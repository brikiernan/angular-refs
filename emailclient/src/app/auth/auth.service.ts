import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ENDPOINT, UsernameResponse } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameResponse>(`${ENDPOINT}/username`, {
      username,
    });
  }
}
