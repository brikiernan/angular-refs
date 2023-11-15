import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataService } from '@ngrx/data';

import { FactOverrideService } from './services/fact-override.service';
import { FactRoutingModule } from './fact-routing.module';
import { FactComponent } from './fact/fact.component';
import { FactKey } from './fact.model';

@NgModule({
  declarations: [FactComponent],
  imports: [CommonModule, FactRoutingModule],
})
export class FactModule {
  constructor(
    private entityDataService: EntityDataService,
    private factOverrideService: FactOverrideService
  ) {
    this.entityDataService.registerService(FactKey, this.factOverrideService);
  }
}
