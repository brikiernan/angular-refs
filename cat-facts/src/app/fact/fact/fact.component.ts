import { Component } from '@angular/core';

import { FactService } from '../services/fact.service';

@Component({
  selector: 'cat-fact',
  templateUrl: './fact.component.html',
  styleUrl: './fact.component.css',
})
export class FactComponent {
  loading$ = this.factService.loading$;
  fact$ = this.factService.entities$;

  constructor(private factService: FactService) {}

  ngOnInit() {
    this.factService.getAll();
  }
}
