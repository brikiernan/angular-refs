import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from 'shared/modal/modal.component';
import { EmailFormComponent } from 'inbox/email-form/email-form.component';
import { EmailDetails, SendEmailParams } from 'inbox/email.model';
import { AuthService } from 'auth/auth.service';
import { EmailService } from 'inbox/email.service';

@Component({
  selector: 'app-email-create',
  standalone: true,
  imports: [CommonModule, EmailFormComponent, ModalComponent],
  templateUrl: './email-create.component.html',
  styles: [
    `
      .ui.button.primary {
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: EmailDetails = {
    from: '',
    html: '',
    id: '',
    subject: '',
    text: '',
    to: '',
  };

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.email.from = this.authService.username + '@angular-email.com';
  }

  onSubmit(params: SendEmailParams) {
    this.emailService.sendEmail(params).subscribe(() => {
      this.showModal = false;
    });
  }
}
