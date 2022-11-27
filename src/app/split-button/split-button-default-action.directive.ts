import { Directive, TemplateRef } from '@angular/core';

@Directive({
 selector: '[app-split-button ng-template[splitButtonDefaultAction]]'
// selector: '[splitButtonDefaultAction]'

})
export class SplitButtonDefaultActionDirective {

  constructor(public readonly template: TemplateRef<void>) { }

}
