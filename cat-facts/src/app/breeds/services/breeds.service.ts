import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Breed, BreedsKey } from '../breeds.model';

@Injectable({ providedIn: 'root' })
export class BreedsService extends EntityCollectionServiceBase<Breed> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(BreedsKey, serviceElementsFactory);
  }
}
