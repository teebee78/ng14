import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvaExampleComponent } from './cva-example/cva-example.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { OverlayExampleComponent } from './overlay-example/overlay-example.component';
import { PartyComponent } from './party/party.component';
import { SplitButtonDemoComponent } from './split-button-demo/split-button-demo.component';
import { ToastDemoComponent } from './toast-demo/toast-demo.component';
import { TypedFormsComponent } from './typed-forms/typed-forms.component';

const routes: Routes = [
  {
    path: 'typed-forms', 
    component: TypedFormsComponent
  }, 
  {
    path: 'cva', 
    component: CvaExampleComponent
  }, 
  { 
    path: 'dialog', 
    component: DialogExampleComponent
  }, 
  {
    path: 'overlay', 
    component: OverlayExampleComponent
  }, 
  {
    path: 'toast', 
    component: ToastDemoComponent
  }, 
  {
    path: 'split-button', 
    component: SplitButtonDemoComponent
  }, 
  {
    path: 'standalone', 
    loadChildren: () => import('./standalone/standalone.module').then(m => m.StandaloneModule)
  }, 
  {
    path: 'party', 
    component: PartyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
