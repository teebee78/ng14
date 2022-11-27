import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonComponent } from './split-button/split-button.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { SplitButtonDefaultActionDirective } from './split-button-default-action.directive';
import { SplitButtonActionDirective } from './split-button-action.directive';


@NgModule({
  declarations: [
    SplitButtonComponent,
    SplitButtonDefaultActionDirective,
    SplitButtonActionDirective
  ],
  imports: [
    CommonModule, 
    OverlayModule
  ], 
  exports: [
    SplitButtonComponent, 
    SplitButtonDefaultActionDirective, 
    SplitButtonActionDirective
  ]
})
export class SplitButtonModule { }
