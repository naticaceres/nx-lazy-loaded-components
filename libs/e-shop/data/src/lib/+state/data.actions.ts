import { createAction, props } from '@ngrx/store';
import { EShopDataEntity } from './data.models';

export const init = createAction('[EShopData Page] Init');

export const loadEShopDataSuccess = createAction(
  '[EShopData/API] Load EShopData Success',
  props<{ eShopData: EShopDataEntity[] }>()
);

export const loadEShopDataFailure = createAction(
  '[EShopData/API] Load EShopData Failure',
  props<{ error: any }>()
);
