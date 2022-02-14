import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEShopData from './+state/data.reducer';
import { EShopDataEffects } from './+state/data.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromEShopData.E_SHOP_DATA_FEATURE_KEY,
      fromEShopData.reducer
    ),
    EffectsModule.forFeature([EShopDataEffects]),
  ],
})
export class EShopDataModule {}
