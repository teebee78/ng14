import { Component, OnInit } from '@angular/core';
import { ToastType } from '../toast/model';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-toast-demo',
  templateUrl: './toast-demo.component.html',
  styleUrls: ['./toast-demo.component.scss']
})
export class ToastDemoComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  showToast(type: ToastType = 'INFO'): void { 
    this.toastService.showToast('Hello world ' + new Date(), type);
  }
}
