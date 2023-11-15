import { DefaultDataServiceConfig, EntityDataModuleConfig } from '@ngrx/data';

import {
  factEntityMetadata,
  factEntityPluralNames,
} from '../fact/state/fact-metadata';

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata: {
    ...factEntityMetadata,
  },
  pluralNames: {
    ...factEntityPluralNames,
  },
};

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://catfact.ninja',
};

export const DefaultDataServiceProvider = {
  provide: DefaultDataServiceConfig,
  useValue: defaultDataServiceConfig,
};
