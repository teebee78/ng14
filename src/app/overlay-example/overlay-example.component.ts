import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { delay, EMPTY, noop, of } from 'rxjs';
import { ToastMessageComponent } from '../toast-message/toast-message.component';

@Component({
  selector: 'app-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss']
})
export class OverlayExampleComponent implements OnInit {

  private overlayRef: OverlayRef | undefined;
  private lastToasOverlayRef: OverlayRef | undefined;

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

  showMessage() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .global()
        .top('100px')
        .right('50px'),
    });
    const viewRef = overlayRef.attach(new TemplatePortal(this.overlayContent, this.viewContainerRef));
    of(EMPTY).pipe(delay(1500)).subscribe({ complete: () => overlayRef.dispose() });
  }

  showToastMessage() {
    const toastOverlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .global()
        .right()
        .top((this.lastToasOverlayRef?.overlayElement?.getBoundingClientRect()?.bottom ?? 0) + 'px'),
      panelClass: 'toast-panel',
    });
    this.lastToasOverlayRef = toastOverlayRef;
    toastOverlayRef.attach(new ComponentPortal(ToastMessageComponent));
    of(EMPTY)
      .pipe(delay(10_000))
      .subscribe({
        complete: () => {
          toastOverlayRef?.dispose();
        }
      });
  }

  onHoverOut() {
    console.log('OnHoverOut');
    this.overlayRef?.detach();
  }
}
