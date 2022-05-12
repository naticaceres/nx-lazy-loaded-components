import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  createNgModuleRef,
  AfterViewInit,
  ChangeDetectorRef,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('dynamicTemplateRef', { read: TemplateRef })
  dynamicTemplateRef!: TemplateRef<any>;
  @ViewChild('dynamicViewContainer', { read: ViewContainerRef })
  dynamicViewContainerRef!: ViewContainerRef;

  widgetConfiguration: { component: string; library: string }[] = [
    { component: 'widget', library: '@lazy-dashboard/hotel/widget' },
  ];

  ngAfterViewInit(): void {
    this.createDynamicComponent('something');
  }



  async createDynamicComponent(context: any) {
    console.log('This is createView');
    setTimeout(async () => {
      const lazyComponent = await import('@lazy-dashboard/hotel/widget');
      const ngModuleRef = createNgModuleRef(lazyComponent.HotelWidgetModule);
      const componentRef = this.dynamicViewContainerRef.createComponent(
        lazyComponent.WidgetComponent,
        { ngModuleRef: ngModuleRef }
      );
      componentRef.instance.ngOnInit();
      componentRef.instance.hotelName = 'my hotel';
      componentRef.injector.get(ChangeDetectorRef).markForCheck();
    }, 500)

  }
}
