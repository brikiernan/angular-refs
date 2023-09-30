import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from 'shared/modal/modal.component';
import { EmailDetails, SendEmailParams } from 'inbox/email.model';
import { EmailService } from 'inbox/email.service';
import { EmailFormComponent } from 'inbox/email-form/email-form.component';

@Component({
  selector: 'app-email-reply',
  standalone: true,
  imports: [CommonModule, EmailFormComponent, ModalComponent],
  templateUrl: './email-reply.component.html',
  styles: [],
})
export class EmailReplyComponent implements OnChanges {
  showModal = false;
  @Input({ required: true }) email!: EmailDetails;

  constructor(private emailService: EmailService) {}

  ngOnChanges(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ');

    this.email = {
      ...this.email,
      to: this.email.from,
      from: this.email.to,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n--------- ${this.email.from} wrote:\n> ${text}`,
    };
  }

  onSubmit(params: SendEmailParams) {
    this.emailService.sendEmail(params).subscribe(() => {
      this.showModal = false;
    });
  }
}
