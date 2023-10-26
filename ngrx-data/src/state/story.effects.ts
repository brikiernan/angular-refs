import { map } from 'rxjs';
import { inject } from '@angular/core';
import { Actions, FunctionalEffect, createEffect } from '@ngrx/effects';
import {
  EntityActionFactory,
  ofEntityType,
  ofEntityOp,
  EntityOp,
} from '@ngrx/data';

export const storyEffects: { [key: string]: FunctionalEffect } = {
  optimisticErrors$: createEffect(
    () => {
      const actions = inject(Actions);
      const entityActionFactory = inject(EntityActionFactory);
      return actions.pipe(
        ofEntityType(['Story']),
        ofEntityOp([EntityOp.SAVE_UPDATE_ONE_ERROR]),
        map((action) => {
          const id = action.payload.data.originalAction.payload.data.id;
          return entityActionFactory.create(
            action.payload.entityName,
            EntityOp.UNDO_ONE,
            id
          );
        })
      );
    },
    { functional: true }
  ),
};
