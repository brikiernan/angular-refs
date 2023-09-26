import { EMPTY, catchError } from 'rxjs';
import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';

import { EmailDetails } from './email.model';
import { EmailService } from './email.service';

export const emailResolver: ResolveFn<EmailDetails> = (route) => {
  const emailService = inject(EmailService);
  const router = inject(Router);
  return emailService.getEmailById(route.params['id']).pipe(
    catchError(() => {
      router.navigateByUrl('/inbox/not-found');
      return EMPTY;
    })
  );
};
