import { DefaultDataServiceConfig, EntityDataModuleConfig } from '@ngrx/data';

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata: {},
  pluralNames: {},
};

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://catfact.ninja',
};

export const DefaultDataServiceProvider = {
  provide: DefaultDataServiceConfig,
  useValue: defaultDataServiceConfig,
};
