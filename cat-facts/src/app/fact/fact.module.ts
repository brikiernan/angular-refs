import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactRoutingModule } from './fact-routing.module';
import { FactComponent } from './fact/fact.component';

@NgModule({
  declarations: [FactComponent],
  imports: [CommonModule, FactRoutingModule],
})
export class FactModule {}
