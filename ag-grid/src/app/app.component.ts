import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact, generateContacts } from '@astrouxds/mock-data';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  columnDefs: ColDef<Contact>[] = [
    { field: 'id' },
    { field: 'satellite' },
    { field: 'status' },
    { field: 'step' },
    { field: 'aos' },
    { field: 'los' },
    { field: 'latitude' },
    { field: 'latitude' },
    { field: 'azimuth' },
    { field: 'rev' },
    { field: 'equipment' },
    { field: 'beginTimestamp' },
    { field: 'endTimestamp' },
    { field: 'mode' },
  ];

  rowData = generateContacts();

  ngOnInit(): void {}
}
