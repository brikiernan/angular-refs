import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataService } from '@ngrx/data';

import { FactsOverrideService } from './services/facts-override.service';
import { FactsRoutingModule } from './facts-routing.module';
import { FactsComponent } from './facts/facts.component';
import { FactsKey } from './facts.model';

@NgModule({
  declarations: [FactsComponent],
  imports: [CommonModule, FactsRoutingModule],
})
export class FactsModule {
  constructor(
    private entityDataService: EntityDataService,
    private factsOverrideService: FactsOverrideService
  ) {
    this.entityDataService.registerService(FactsKey, this.factsOverrideService);
  }
}
