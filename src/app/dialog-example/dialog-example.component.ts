import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {Dialog, DialogRef} from '@angular/cdk/dialog';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {

  @ViewChild('dialogContent') dialogContent!: TemplateRef<any>;

  constructor(public dialog: Dialog) { }

  dialogRef: DialogRef | undefined;

  ngOnInit(): void {
  }

  openDialog() {
    console.log('open dialog', this.dialog, this.dialogContent);
    this.dialogRef = this.dialog.open(this.dialogContent, {
      width: '250px', 
      height: '150px', 
      panelClass: 'my-dialog'
    });
    this.dialogRef.closed.subscribe(result => {
      this.dialogRef = undefined;
      console.log('closed', result);
    });
  }

  closeDialog() {
    this.dialogRef?.close();
  }
}
