import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFeatureRoutingModule } from './dashboard-feature-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [CommonModule, DashboardFeatureRoutingModule],
  declarations: [
    LandingComponent
  ],
})
export class DashboardFeatureModule {}
