import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lazy-dashboard-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [WidgetComponent],
  exports: [WidgetComponent]
})
export class HotelWidgetModule {}
