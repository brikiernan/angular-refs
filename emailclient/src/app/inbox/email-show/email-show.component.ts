import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { EmailDetails } from 'inbox/email.model';

@Component({
  selector: 'app-email-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-show.component.html',
  styles: [],
})
export class EmailShowComponent {
  email: EmailDetails = this.route.snapshot.data['email'];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ email }) => (this.email = email));
  }
}
