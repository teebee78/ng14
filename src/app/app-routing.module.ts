import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypedFormsComponent } from './typed-forms/typed-forms.component';

const routes: Routes = [
  {
    path: 'typed-forms', 
    component: TypedFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
