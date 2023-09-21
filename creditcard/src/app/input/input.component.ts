import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './input.component.html',
  styles: [
    `
      .field {
        margin-bottom: 0.75rem;
      }
    `,
  ],
})
export class InputComponent {
  @Input({ required: true }) control: FormControl = new FormControl();
  @Input() label: string = '';
  @Input() mask: string | undefined;
  @Input() dropSpecialCharacters: boolean = false;
}
