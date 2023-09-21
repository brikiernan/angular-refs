import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputComponent } from '../input/input.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, CardComponent],
  templateUrl: './card-form.component.html',
  styles: [],
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    security: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  onSubmit() {
    console.log(this.cardForm.value);
  }

  onReset() {
    this.cardForm.reset();
  }
}
