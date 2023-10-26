import { DefaultDataServiceConfig, EntityMetadata } from '@ngrx/data';
import { Story } from './story';

export const storyEntityMetadata: EntityMetadata<Story> = {
  entityName: 'Story',
  selectId: (entity: Story): string => entity.storyId,
  sortComparer: (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
  filterFn: (entities, pattern) =>
    entities.filter(
      (entity) =>
        entity.title?.includes(pattern) || entity.title?.includes(pattern)
    ),
};

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: '/api/v1',
  getDelay: 1000,
  saveDelay: 1000,
};

export const DefaultDataServiceProvider = {
  provide: DefaultDataServiceConfig,
  useValue: defaultDataServiceConfig,
};
