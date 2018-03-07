import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUsersHost]'
})
export class UsersHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
