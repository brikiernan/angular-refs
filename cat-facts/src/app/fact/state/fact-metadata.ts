import { EntityMetadataMap, EntityPluralNames } from '@ngrx/data';
import { Fact, FactKey } from '../fact.model';

export const factEntityMetadata: EntityMetadataMap = {
  [FactKey]: {
    selectId: (fact: Fact) => fact.fact,
  },
};

export const factEntityPluralNames: EntityPluralNames = {
  [FactKey]: FactKey,
};
