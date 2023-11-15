import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Fact, FactsKey } from '../facts.model';

@Injectable({ providedIn: 'root' })
export class FactsService extends EntityCollectionServiceBase<Fact> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(FactsKey, serviceElementsFactory);
  }
}
