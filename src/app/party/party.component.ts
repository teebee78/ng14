import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-party',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyComponent implements OnInit {

  public party = new FormGroup({
    address: new FormGroup({
      number: new FormControl(1234),
      street: new FormControl('Powell St')
    }),
    formal: new FormControl(true),
    foodOptions: new FormArray([new FormControl('Soup')])
  });

  constructor() {
  }

  public addMenuItem() {
    this.party.controls.foodOptions.push(new FormControl(''))
  }

  public partyInSF() {
    this.party.controls.address.setValue({
      street: 'Lombard',
      number: 77,
    });
  }

  public houseOne() {
    this.party.controls.address.patchValue({
      number: 1
    });
  }

  ngOnInit(): void {
  }
}

