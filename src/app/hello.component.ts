import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  selector: 'hello',
  template: `
    <button md-raised-button (click)="onClick()">Click Me</button>
    <p>{{ message }}</p>
  `,
  directives: [MD_BUTTON_DIRECTIVES]
})
export class HelloComponent {
  public message: string;

  public onClick(): void {
    this.message = 'Hello Angular 2';
  }
}