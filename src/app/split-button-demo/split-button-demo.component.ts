import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-button-demo',
  templateUrl: './split-button-demo.component.html',
  styleUrls: ['./split-button-demo.component.scss']
})
export class SplitButtonDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onPrimrayAction() {
    console.log('hello world');
  }

  public onAction(message: string) {
    console.log(`action ${message} clicked`)
  }
}
