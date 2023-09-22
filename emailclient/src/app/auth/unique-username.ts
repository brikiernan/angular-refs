import { Observable, catchError, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private auth: AuthService) {}

  validate = ({
    value,
  }: AbstractControl<string>): Observable<ValidationErrors | null> => {
    return this.auth.usernameAvailable(value).pipe(
      map(() => {
        // only in this block if username is available so no need
        // to do anything with the value
        return null;
      }),
      catchError((err) => {
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        }
        return of({ unknown: true });
      })
    );
  };
}
