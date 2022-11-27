import { ContentChild, Input } from '@angular/core';
import { ContentChildren } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { QueryList } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SplitButtonActionDirective } from '../split-button-action.directive';
import { SplitButtonDefaultActionDirective } from '../split-button-default-action.directive';

@Component({
  selector: 'app-split-button',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitButtonComponent implements OnInit, AfterContentInit {

  @Input()
  public type: 'primary' | '' = '';

  public isExpanded = false;

  @ContentChild(SplitButtonDefaultActionDirective, {static: true})
  public defaultAction!: SplitButtonDefaultActionDirective;

  @ContentChildren(SplitButtonActionDirective)
  public actions!: QueryList<SplitButtonActionDirective>;

  constructor() { }

  ngOnInit(): void {
  }
  
  public onPrimaryAction() {
    console.log('>>>> onPrimaryAction');
  }

  public onDefaultActionClick(event: Event) {

  }

  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.defaultAction);
  }
  public onActionClick() {
    this.isExpanded = false;
  }
}
