import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { EmailDetails } from 'inbox/email.model';
import { EmailReplyComponent } from 'inbox/email-reply/email-reply.component';

@Component({
  selector: 'app-email-show',
  standalone: true,
  imports: [CommonModule, EmailReplyComponent],
  templateUrl: './email-show.component.html',
  styles: [
    `
      .header {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class EmailShowComponent {
  email: EmailDetails = this.route.snapshot.data['email'];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ email }) => (this.email = email));
  }
}
