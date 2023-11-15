import { EntityMetadataMap, EntityPluralNames } from '@ngrx/data';
import { Fact, FactsKey } from '../facts.model';

export const factsEntityMetadata: EntityMetadataMap = {
  [FactsKey]: {
    selectId: (fact: Fact) => fact.fact,
  },
};

export const factsEntityPluralNames: EntityPluralNames = {
  [FactsKey]: FactsKey,
};
