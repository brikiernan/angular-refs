import { DefaultDataServiceConfig, EntityDataModuleConfig } from '@ngrx/data';

import {
  breedsEntityMetadata,
  breedsEntityPluralNames,
} from '../breeds/state/breeds-metadata';
import {
  factEntityMetadata,
  factEntityPluralNames,
} from '../fact/state/fact-metadata';
import {
  factsEntityMetadata,
  factsEntityPluralNames,
} from '../facts/state/facts-metadata';
import { ApiPath } from './app-paths';

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata: {
    ...breedsEntityMetadata,
    ...factEntityMetadata,
    ...factsEntityMetadata,
  },
  pluralNames: {
    ...breedsEntityPluralNames,
    ...factEntityPluralNames,
    ...factsEntityPluralNames,
  },
};

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: ApiPath.root,
};

export const DefaultDataServiceProvider = {
  provide: DefaultDataServiceConfig,
  useValue: defaultDataServiceConfig,
};
