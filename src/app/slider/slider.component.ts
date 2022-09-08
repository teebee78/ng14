import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    }
  ]
})
export class SliderComponent implements ControlValueAccessor {

  public formControl = this.fb.control(50);
  private onChangeFn?: (_: number | null) => void;
  private onTouchedFn?: () => void;

  constructor(private fb: FormBuilder) { }

  writeValue(obj: number): void {
    this.formControl.setValue(obj);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  onMouseUp(event: MouseEvent) {
    console.log('mouse up', event, this.formControl.value);
    if (this.onChangeFn) {
      this.onChangeFn(this.formControl.value);
    }
  }
}
