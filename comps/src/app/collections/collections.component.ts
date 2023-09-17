import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { TabsComponent } from './tabs/tabs.component';

export interface Data {
  employed: boolean;
  name: string;
  age: number;
  job: 'Designer' | 'Engineer' | 'Developer';
}

export interface Headers {
  key: keyof Data;
  label: string;
}

@Component({
  standalone: true,
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
  imports: [
    CommonModule,
    TableComponent,
    SharedModule,
    RouterModule,
    TabsComponent,
  ],
})
export class CollectionsComponent {
  data: Data[] = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
    { name: 'Elyse', age: 25, job: 'Developer', employed: false },
  ];
  headers: Headers[] = [
    { key: 'employed', label: 'Working' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
