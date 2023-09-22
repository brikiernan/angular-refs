import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquationComponent } from './equation/equation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EquationComponent],
  template: `<app-equation />`,
  styles: [],
})
export class AppComponent {
  title = 'mathform';
}
