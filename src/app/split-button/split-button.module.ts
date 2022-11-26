import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonComponent } from './split-button/split-button.component';



@NgModule({
  declarations: [
    SplitButtonComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SplitButtonComponent
  ]
})
export class SplitButtonModule { }
