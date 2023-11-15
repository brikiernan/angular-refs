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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
