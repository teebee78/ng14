import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-typed-forms',
  templateUrl: './typed-forms.component.html',
  styleUrls: ['./typed-forms.component.scss']
})
export class TypedFormsComponent implements OnInit {

  form = this.fb.group({
    email: ['', [ Validators.required, Validators.email]], 
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  formValue?: FormValue;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login() {
    this.formValue = this.form.value;
  }
}
interface FormValue {
  email?: string | null; 
  password?: string | null;
}
