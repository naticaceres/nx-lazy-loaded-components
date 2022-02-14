import { EShopDataEntity } from './data.models';
import {
  eShopDataAdapter,
  EShopDataPartialState,
  initialState,
} from './data.reducer';
import * as EShopDataSelectors from './data.selectors';

describe('EShopData Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getEShopDataId = (it: EShopDataEntity) => it.id;
  const createEShopDataEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as EShopDataEntity);

  let state: EShopDataPartialState;

  beforeEach(() => {
    state = {
      eShopData: eShopDataAdapter.setAll(
        [
          createEShopDataEntity('PRODUCT-AAA'),
          createEShopDataEntity('PRODUCT-BBB'),
          createEShopDataEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('EShopData Selectors', () => {
    it('getAllEShopData() should return the list of EShopData', () => {
      const results = EShopDataSelectors.getAllEShopData(state);
      const selId = getEShopDataId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = EShopDataSelectors.getSelected(state) as EShopDataEntity;
      const selId = getEShopDataId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getEShopDataLoaded() should return the current "loaded" status', () => {
      const result = EShopDataSelectors.getEShopDataLoaded(state);

      expect(result).toBe(true);
    });

    it('getEShopDataError() should return the current "error" state', () => {
      const result = EShopDataSelectors.getEShopDataError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
