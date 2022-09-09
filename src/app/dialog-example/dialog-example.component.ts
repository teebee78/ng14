import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {Dialog, DialogRef} from '@angular/cdk/dialog';
import { throwIfEmpty } from 'rxjs';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {

  @ViewChild('dialogContent') dialogContent!: TemplateRef<any>;

  @ViewChild('innerDialogContent') innerDialogContent!: TemplateRef<any>;

  yesOrNoAnswer: string | undefined;

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

  openQuestionDialog() {
    this.yesOrNoAnswer = undefined;
    const dialogRef = this.dialog.open<string>(DialogContentComponent, {
      width: '250px',
      height: '200px', 
      data: {
        message: 'hello world this is the dialog data', 
        template: this.innerDialogContent,
      }
    });
    dialogRef?.closed.subscribe(result => 
      this.yesOrNoAnswer = result);
  }
}
