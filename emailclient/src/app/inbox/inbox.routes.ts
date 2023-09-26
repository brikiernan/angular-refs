import { Routes } from '@angular/router';

export const inboxRoutes: Routes = [
  {
    path: 'inbox',
    loadComponent: async () => {
      const { InboxComponent } = await import('./inbox.component');
      return InboxComponent;
    },
  },
];
