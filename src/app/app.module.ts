import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypedFormsComponent } from './typed-forms/typed-forms.component';
import { CvaExampleComponent } from './cva-example/cva-example.component';
import { SliderComponent } from './slider/slider.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { Dialog, DialogModule, DIALOG_SCROLL_STRATEGY } from '@angular/cdk/dialog';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    TypedFormsComponent,
    CvaExampleComponent,
    SliderComponent,
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    DialogModule, 
  ],
  providers: [Dialog, Overlay],
  bootstrap: [AppComponent]
})
export class AppModule { }
