import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss']
})
export class OverlayExampleComponent implements OnInit {

  private overlayRef: OverlayRef | undefined;

  @ViewChild('overlayContent')
  public overlayContent!: TemplateRef<any>

  @ViewChild('hot', { read: ViewContainerRef })
  public higlightContainer!: ViewContainerRef;


  constructor(private overlay: Overlay, private elementRef: ElementRef, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  onHover(event: MouseEvent) {
    console.log('OnHover', event.relatedTarget, this.elementRef, this.viewContainerRef);

    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        //        .flexibleConnectedTo({x: event.x + 1, y: event.y + 1})
        .flexibleConnectedTo(this.elementRef)
        .withPositions([{
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        }])
    });
    const viewRef = this.overlayRef.attach(new TemplatePortal(this.overlayContent, this.viewContainerRef))
  }

  onHoverOut() {
    console.log('OnHoverOut');
    this.overlayRef?.detach();
  }
}
