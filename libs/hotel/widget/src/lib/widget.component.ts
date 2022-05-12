import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, OnInit, ɵdetectChanges } from '@angular/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

enum PetType {
  dog,
  cat,
  bird
}

@Component({
  selector: 'lazy-dashboard-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent  implements OnChanges, OnInit{
  @Input() petType!: PetType;
  @Input() hotelName = "noName"

  ngOnInit(): void {
    console.log("this is hotelWidget onInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hotelName.currentValue){
      console.log("this is onChanges in hotelWidget" , changes)
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [WidgetComponent],
  exports: [WidgetComponent]
})
export class HotelWidgetModule{

}
