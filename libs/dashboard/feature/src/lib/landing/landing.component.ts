import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  createNgModuleRef,
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';

export interface HotelStay {
  startDate: Date;
  endDate: Date;
  id: string;
}

@Component({
  selector: 'lazy-dashboard-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {
  @ViewChild('dynamicTemplateRef', { read: TemplateRef })
  dynamicTemplateRef!: TemplateRef<any>;
  @ViewChild('dynamicViewContainer', { read: ViewContainerRef })
  dynamicViewContainerRef!: ViewContainerRef;

  widgetConfiguration: { component: string; library: string }[] = [
    { component: 'widget', library: '@lazy-dashboard/hotel/widget' },
  ];

  ngOnInit(): void {
    this.createDynamicComponent();
  }

  async createDynamicComponent() {
    console.log('This is createView');
    const lazyComponent = await import('@lazy-dashboard/hotel/widget');
    const ngModuleRef = createNgModuleRef(lazyComponent.HotelWidgetModule);
    const componentRef = this.dynamicViewContainerRef.createComponent(
      lazyComponent.WidgetComponent,
      { ngModuleRef }
    );
    componentRef.instance.hotelName = 'THIS IS THE INPUT PROPERTY';
    // if OnPush CD is on, it won't detect changes set imperatively to the child component.
    // therefore if OnPush is needed, this line below is needed too.
    //componentRef.injector.get(ChangeDetectorRef).markForCheck(); // this is my problem
  }
}
