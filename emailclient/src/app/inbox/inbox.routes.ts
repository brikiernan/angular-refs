import { Routes } from '@angular/router';

import { authGuard } from 'auth/auth.guard';

export const inboxRoutes: Routes = [
  {
    path: 'inbox',
    canMatch: [authGuard],
    loadComponent: async () => {
      const { InboxComponent } = await import('./inbox.component');
      return InboxComponent;
    },
  },
];
