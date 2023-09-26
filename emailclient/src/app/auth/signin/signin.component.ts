import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators as v,
} from '@angular/forms';

import { InputComponent } from 'shared/input/input.component';
import { AuthService } from 'auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  templateUrl: './signin.component.html',
  styles: [
    `
      .basic.label,
      .button {
        margin-bottom: 0.5rem;
      }
    `,
  ],
})
export class SigninComponent {
  form = new FormGroup({
    username: new FormControl('', [
      v.required,
      v.minLength(3),
      v.maxLength(20),
      v.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      v.required,
      v.minLength(4),
      v.maxLength(20),
    ]),
  });

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.auth.signin(this.form.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: ({ error }) => {
        if (error.username || error.password) {
          this.form.setErrors({ credentials: true });
          return;
        }

        this.form.setErrors({ unknown: true });
      },
    });
  }
}
