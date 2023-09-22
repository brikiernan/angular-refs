import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

import { AuthForm } from './auth.model';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  validate(control: AbstractControl<AuthForm>): ValidationErrors | null {
    const { password, passwordConfirmation } = control.value;
    if (password !== passwordConfirmation) {
      return { passwordsDontMatch: true };
    }
    return null;
  }
}
