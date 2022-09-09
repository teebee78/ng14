import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  constructor(@Inject(DIALOG_DATA) public data: {message: string, template: TemplateRef<any>}, public dialogRef: DialogRef<string>) { }

  ngOnInit(): void {
  }

  onYesClick() {
    this.dialogRef.close('YES');
  }

  onNoClick() { 
    this.dialogRef.close('NO');
  }
}
