import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as EShopDataActions from './data.actions';
import { EShopDataEntity } from './data.models';

export const E_SHOP_DATA_FEATURE_KEY = 'eShopData';

export interface State extends EntityState<EShopDataEntity> {
  selectedId?: string | number; // which EShopData record has been selected
  loaded: boolean; // has the EShopData list been loaded
  error?: string | null; // last known error (if any)
}

export interface EShopDataPartialState {
  readonly [E_SHOP_DATA_FEATURE_KEY]: State;
}

export const eShopDataAdapter: EntityAdapter<EShopDataEntity> =
  createEntityAdapter<EShopDataEntity>();

export const initialState: State = eShopDataAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const eShopDataReducer = createReducer(
  initialState,
  on(EShopDataActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(EShopDataActions.loadEShopDataSuccess, (state, { eShopData }) =>
    eShopDataAdapter.setAll(eShopData, { ...state, loaded: true })
  ),
  on(EShopDataActions.loadEShopDataFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return eShopDataReducer(state, action);
}
