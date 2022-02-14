import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  E_SHOP_DATA_FEATURE_KEY,
  State,
  eShopDataAdapter,
} from './data.reducer';

// Lookup the 'EShopData' feature state managed by NgRx
export const getEShopDataState = createFeatureSelector<State>(
  E_SHOP_DATA_FEATURE_KEY
);

const { selectAll, selectEntities } = eShopDataAdapter.getSelectors();

export const getEShopDataLoaded = createSelector(
  getEShopDataState,
  (state: State) => state.loaded
);

export const getEShopDataError = createSelector(
  getEShopDataState,
  (state: State) => state.error
);

export const getAllEShopData = createSelector(
  getEShopDataState,
  (state: State) => selectAll(state)
);

export const getEShopDataEntities = createSelector(
  getEShopDataState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getEShopDataState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getEShopDataEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
