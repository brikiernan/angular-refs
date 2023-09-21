import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styles: [
    `
      .container {
        padding-block: 4rem;
      }
    `,
  ],
})
export class AppComponent {
  email = '';

  onSubmit() {
    console.log(this.email);
  }
}
