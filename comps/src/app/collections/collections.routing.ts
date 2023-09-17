import { Routes } from '@angular/router';

import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

export const collectionRoutes: Routes = [
  {
    path: 'collections',
    loadComponent: async () => {
      const { CollectionsComponent } = await import('./collections.component');
      return CollectionsComponent;
    },
    children: [
      { path: '', component: BiographyComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'partners', component: PartnersComponent },
    ],
  },
];
