import { map, skipWhile, tap } from 'rxjs';
import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

import { AuthService } from './auth.service';

export const authGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.authenticated$.pipe(
    skipWhile((val) => val === null),
    map((val) => Boolean(val)),
    tap((val) => {
      if (!val) {
        router.navigateByUrl('/');
      }
    })
  );
};
