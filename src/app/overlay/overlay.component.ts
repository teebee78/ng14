import { Component, Inject, OnInit } from '@angular/core';
import { OVERLAY_DATA } from '../toverlay.directive';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  constructor(@Inject(OVERLAY_DATA) public data: {date: Date}) { }

  ngOnInit(): void {
  }

}
