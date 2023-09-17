import { Routes } from '@angular/router';

export const modsRoutes: Routes = [
  {
    path: 'modules',
    loadComponent: async () => {
      const { ModsComponent } = await import('./mods.component');
      return ModsComponent;
    },
  },
];

export class ModsRoutingModule {}
