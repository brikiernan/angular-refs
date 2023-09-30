import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailCreateComponent } from './email-create/email-create.component';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    CommonModule,
    EmailIndexComponent,
    EmailCreateComponent,
    RouterModule,
  ],
  templateUrl: './inbox.component.html',
  styles: [],
})
export class InboxComponent {}
