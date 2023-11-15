import { Component } from '@angular/core';
import { BreedsService } from '../services/breeds.service';

@Component({
  selector: 'cat-breeds',
  templateUrl: './breeds.component.html',
  styleUrl: './breeds.component.css',
})
export class BreedsComponent {
  loading$ = this.breedsService.loading$;
  breeds$ = this.breedsService.entities$;

  constructor(private breedsService: BreedsService) {}

  ngOnInit() {
    this.breedsService.getAll();
  }
}
