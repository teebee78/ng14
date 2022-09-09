import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Directive, ElementRef, HostListener, InjectionToken, Injector, ValueProvider } from '@angular/core';
import { OverlayComponent } from './overlay/overlay.component';

export const OVERLAY_DATA = new InjectionToken<any>("OVERLAY_DATA");

@Directive({
  selector: '[toverlay]'
})
export class ToverlayDirective {

  private overlayRef?: OverlayRef;
  constructor(private overlay: Overlay, private elRef: ElementRef, private injector: Injector) { }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: any) {
    console.log('mouseover', event);
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        //        .flexibleConnectedTo({x: event.x + 1, y: event.y + 1})
        .flexibleConnectedTo(this.elRef)
        .withPositions([{
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        ])
    });
    var valueInjector = Injector.create({
      providers: [{ provide: OVERLAY_DATA, useValue: {date: new Date()}} as ValueProvider]
    });

    const viewRef = this.overlayRef.attach(new ComponentPortal(OverlayComponent, null, valueInjector))
  }

  @HostListener('mouseout')
  onMouseOut(event: MouseEvent) {
    console.log('mouseout');
    this.overlayRef?.detach();
  }
}
