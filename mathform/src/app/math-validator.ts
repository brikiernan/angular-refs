import { AbstractControl } from '@angular/forms';

export class MathValidator {
  static add(value1: string, value2: string, result: string) {
    return (form: AbstractControl) => {
      const a = form.value[value1];
      const b = form.value[value2];
      const c = form.value[result];
      if (a + b === parseInt(c)) return null;
      return { addition: true };
    };
  }
}
