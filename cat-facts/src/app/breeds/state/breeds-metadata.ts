import { EntityMetadataMap, EntityPluralNames } from '@ngrx/data';
import { Breed, BreedsKey } from '../breeds.model';

export const breedsEntityMetadata: EntityMetadataMap = {
  [BreedsKey]: {
    selectId: (breed: Breed) => breed.breed,
  },
};

export const breedsEntityPluralNames: EntityPluralNames = {
  [BreedsKey]: BreedsKey,
};
