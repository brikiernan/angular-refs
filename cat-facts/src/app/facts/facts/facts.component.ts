import { Component } from '@angular/core';
import { FactsService } from '../services/facts.service';

@Component({
  selector: 'cat-facts',
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.css',
})
export class FactsComponent {
  loading$ = this.factsService.loading$;
  facts$ = this.factsService.entities$;

  constructor(private factsService: FactsService) {}

  ngOnInit() {
    this.factsService.getAll();
  }
}
