import { Component, forwardRef, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-cva-example',
  templateUrl: './cva-example.component.html',
  styleUrls: ['./cva-example.component.scss'],
})
export class CvaExampleComponent implements OnInit {

  public formControl = new FormControl(75);

  constructor() { }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe(value => console.log('new vaue', value));
  }
}
