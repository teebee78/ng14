import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastsComponent implements OnInit {

  constructor(public toastService: ToastService, 
    private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostBinding('class.empty')
  get empty(): boolean {
    /** 
     * TODO this is not elegant: basically reading from an observable but here we are 
     * still accessing the underlying data in the service => create a subscription? 
    */
    return this.toastService.empty;
  }
}
