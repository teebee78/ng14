import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Toast } from '../model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input()
  toast!: Toast

  constructor() { }

  ngOnInit(): void {
  }

  get icon(): string { 
    switch (this.toast.type) {
      case 'ERROR': return 'error';
      case 'INFO': return 'lightbulb';
      case 'SUCCESS': return 'check_circle';
      case 'WARN': return 'warning';
    }
  }

  @HostBinding('class')
  get classes(): string { 
    switch(this.toast.type) { 
      case 'ERROR': return 'error';
      case 'INFO': return 'info';
      case 'SUCCESS': return 'success';
      case 'WARN': return 'warning';
    }
  }
}
