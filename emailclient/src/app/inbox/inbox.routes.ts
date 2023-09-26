import { Routes } from '@angular/router';

import { authGuard } from 'auth/auth.guard';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { emailResolver } from './email.resolver';
import { NotFoundComponent } from './not-found/not-found.component';

export const inboxRoutes: Routes = [
  {
    path: 'inbox',
    canMatch: [authGuard],
    loadComponent: async () => {
      const { InboxComponent } = await import('./inbox.component');
      return InboxComponent;
    },
    children: [
      { path: 'not-found', component: NotFoundComponent },
      {
        path: ':id',
        component: EmailShowComponent,
        resolve: { email: emailResolver },
      },
      { path: '', component: PlaceholderComponent },
    ],
  },
];
