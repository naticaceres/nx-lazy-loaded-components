import { R3DeclareComponentFacade } from '@angular/compiler/src/compiler_facade_interface';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
@Component({
  selector: 'lazy-dashboard-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  @ViewChild('dynamicTemplateRef', { read: TemplateRef })
  dynamicTemplateRef!: TemplateRef<any>;
  @ViewChild('dynamicViewContainer', { read: ViewContainerRef })
  dynamicViewContainerRef!: ViewContainerRef;

  constructor(
    //private readonly componentFactoryResolver: R3DeclareComponentFacade
  ) {
    this.createDynamicComponent('something')
  }

  async createDynamicComponent(context: any) {
    console.log('This is createView');
    const lazyComponent = await import('@lazy-dashboard/hotel/widget');
    this.dynamicViewContainerRef.createComponent(
      lazyComponent.WidgetComponent
    );
  }
}
