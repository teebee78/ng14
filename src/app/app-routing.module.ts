import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvaExampleComponent } from './cva-example/cva-example.component';
import { TypedFormsComponent } from './typed-forms/typed-forms.component';

const routes: Routes = [
  {
    path: 'typed-forms', 
    component: TypedFormsComponent
  }, 
  {
    path: 'cva', 
    component: CvaExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
