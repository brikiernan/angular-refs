import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Fact, FactKey } from './fact.model';

@Injectable({ providedIn: 'root' })
export class FactService extends EntityCollectionServiceBase<Fact> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(FactKey, serviceElementsFactory);
  }
}
