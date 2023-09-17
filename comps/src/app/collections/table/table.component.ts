import { Component, INJECTOR, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data, Headers } from '../collections.component';

@Component({
  standalone: true,
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [CommonModule],
})
export class TableComponent {
  @Input('class') classNames = '';
  @Input() data: Data[] = [];
  @Input() headers: Headers[] = [];
}
