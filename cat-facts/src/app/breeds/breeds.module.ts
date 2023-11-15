import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataService } from '@ngrx/data';

import { BreedsOverrideService } from './services/breeds-override.service';
import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedsKey } from './breeds.model';

@NgModule({
  declarations: [BreedsComponent],
  imports: [CommonModule, BreedsRoutingModule],
})
export class BreedsModule {
  constructor(
    private entityDataService: EntityDataService,
    private breedsOverrideService: BreedsOverrideService
  ) {
    this.entityDataService.registerService(
      BreedsKey,
      this.breedsOverrideService
    );
  }
}
