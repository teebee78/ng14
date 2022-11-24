import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsComponent } from './toasts/toasts.component';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast.service';



@NgModule({
  declarations: [
    ToastsComponent,
    ToastComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ToastsComponent, 
  ], 
  providers: [
    ToastService
  ]
})
export class ToastModule { }
