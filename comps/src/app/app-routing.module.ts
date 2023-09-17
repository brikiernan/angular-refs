import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { collectionRoutes } from './collections/collections.routing';
import { modsRoutes } from './mods/mods.routing';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: async () => {
      const { ElementsModule } = await import('./elements/elements.module');
      return ElementsModule;
    },
  },
  ...collectionRoutes,
  {
    path: 'views',
    loadChildren: async () => {
      const { ViewsModule } = await import('./views/views.module');
      return ViewsModule;
    },
  },
  ...modsRoutes,
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
