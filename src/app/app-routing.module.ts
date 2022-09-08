import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvaExampleComponent } from './cva-example/cva-example.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
