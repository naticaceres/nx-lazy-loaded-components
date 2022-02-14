import { Action } from '@ngrx/store';

import * as EShopDataActions from './data.actions';
import { EShopDataEntity } from './data.models';
import { State, initialState, reducer } from './data.reducer';

describe('EShopData Reducer', () => {
  const createEShopDataEntity = (id: string, name = ''): EShopDataEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid EShopData actions', () => {
    it('loadEShopDataSuccess should return the list of known EShopData', () => {
      const eShopData = [
        createEShopDataEntity('PRODUCT-AAA'),
        createEShopDataEntity('PRODUCT-zzz'),
      ];
      const action = EShopDataActions.loadEShopDataSuccess({ eShopData });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
