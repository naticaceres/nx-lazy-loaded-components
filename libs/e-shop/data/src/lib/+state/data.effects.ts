import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as EShopDataActions from './data.actions';
import * as EShopDataFeature from './data.reducer';

@Injectable()
export class EShopDataEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EShopDataActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return EShopDataActions.loadEShopDataSuccess({ eShopData: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return EShopDataActions.loadEShopDataFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
