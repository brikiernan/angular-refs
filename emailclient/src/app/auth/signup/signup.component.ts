import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators as v,
} from '@angular/forms';

import { InputComponent } from 'shared/input/input.component';
import { MatchPassword } from 'auth/match-password';
import { UniqueUsername } from 'auth/unique-username';
import { AuthService } from 'auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  templateUrl: './signup.component.html',
  styles: [
    `
      .basic.label,
      .button {
        margin-bottom: 0.5rem;
      }
    `,
  ],
})
export class SignupComponent {
  form = new FormGroup(
    {
      username: new FormControl(
        '',
        [v.required, v.minLength(3), v.maxLength(20), v.pattern(/^[a-z0-9]+$/)],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl('', [
        v.required,
        v.minLength(4),
        v.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        v.required,
        v.minLength(4),
        v.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private auth: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.auth.signup(this.form.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: () => {
        this.form.setErrors({ unknown: true });
      },
    });
  }
}
