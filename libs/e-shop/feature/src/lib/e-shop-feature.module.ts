import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EShopFeatureRoutingModule } from './e-shop-feature-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [CommonModule, EShopFeatureRoutingModule],
  declarations: [
    LandingComponent
  ],
})
export class EShopFeatureModule {}
