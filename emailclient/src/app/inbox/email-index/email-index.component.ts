import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmailService } from 'inbox/email.service';
import { EmailSummary } from 'inbox/email.model';

@Component({
  selector: 'app-email-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './email-index.component.html',
  styles: [
    `
      .item a {
        color: black;
      }

      a.active {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      a.active:before {
        content: '>';
        font-size: 24px;
        margin-right: 12px;
      }

      .content {
        width: 90%;
      }

      .trim {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
      }
    `,
  ],
})
export class EmailIndexComponent implements OnInit {
  emails: EmailSummary[] = [];

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((value) => {
      this.emails = value;
    });
  }
}
