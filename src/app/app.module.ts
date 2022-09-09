import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypedFormsComponent } from './typed-forms/typed-forms.component';
import { CvaExampleComponent } from './cva-example/cva-example.component';
import { SliderComponent } from './slider/slider.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DialogModule } from '@angular/cdk/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { OverlayExampleComponent } from './overlay-example/overlay-example.component';
import { ToverlayDirective } from './toverlay.directive';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    TypedFormsComponent,
    CvaExampleComponent,
    SliderComponent,
    DialogExampleComponent,
    DialogContentComponent,
    OverlayExampleComponent,
    ToverlayDirective,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    DialogModule, 
		OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
