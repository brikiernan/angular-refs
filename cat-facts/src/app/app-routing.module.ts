import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cat-fact',
    loadChildren: async () => {
      const { FactModule } = await import('./fact/fact.module');
      return FactModule;
    },
  },
  {
    path: 'cat-facts',
    loadChildren: async () => {
      const { FactsModule } = await import('./facts/facts.module');
      return FactsModule;
    },
  },
  {
    path: 'cat-breeds',
    loadChildren: async () => {
      const { BreedsModule } = await import('./breeds/breeds.module');
      return BreedsModule;
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
