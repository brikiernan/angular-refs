import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  CreateEmailParams,
  CreateEmailResponse,
  EmailDetails,
  EmailSummary,
} from './email.model';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  baseUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  getEmails() {
    return this.http.get<EmailSummary[]>(this.baseUrl + '/emails');
  }

  getEmailById(id: string) {
    return this.http.get<EmailDetails>(this.baseUrl + `/emails/${id}`);
  }

  createEmail(params: Partial<CreateEmailParams>) {
    return this.http.post<CreateEmailResponse>(
      this.baseUrl + '/emails',
      params
    );
  }
}
