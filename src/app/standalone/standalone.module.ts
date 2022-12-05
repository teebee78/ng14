import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StandaloneDemoComponent } from './standalone-demo/standalone-demo.component';
import { StandaloneComponent } from './standalone/standalone.component';



@NgModule({
  declarations: [
    StandaloneDemoComponent,
  ],
  imports: [
    CommonModule, 
    StandaloneComponent,
    RouterModule.forChild([
      {
        path: '', 
        component: StandaloneDemoComponent
      }
    ])
  ], 
})
export class StandaloneModule { }
