import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styles: [
    `
      :host {
        display: block;
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class InputComponent {
  @Input({ required: true }) control = new FormControl();
  @Input() label = '';
  @Input() errMsg = '';
  @Input() type: HTMLInputElement['type'] = 'text';
}
