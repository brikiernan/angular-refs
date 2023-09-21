import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardFormComponent } from './card-form/card-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardFormComponent],
  template: `
    <div class="container">
      <app-card-form></app-card-form>
    </div>
  `,
  styles: [
    `
      .container {
        padding-block: 4rem;
      }
    `,
  ],
})
export class AppComponent {}
