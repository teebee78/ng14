import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit {

  static count = 0;
  count;

  constructor(
  ) { 
    ToastMessageComponent.count++;
    console.log('Creating ToastMessageComponent');
    this.count = ToastMessageComponent.count;
  }

  ngOnInit(): void {
  }
}
