import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmailIndexComponent } from './email-index/email-index.component';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule, EmailIndexComponent, RouterModule],
  templateUrl: './inbox.component.html',
  styles: [],
})
export class InboxComponent {}
