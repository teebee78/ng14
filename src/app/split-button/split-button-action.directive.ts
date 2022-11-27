import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'app-split-button ng-template[splitButtonAction]'
})
export class SplitButtonActionDirective {

  constructor(public readonly template: TemplateRef<void>) { }

}
