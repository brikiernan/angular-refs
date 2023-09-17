import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PhotoComponent],
  template: `<app-photo />`,
  styles: [],
})
export class AppComponent {}
