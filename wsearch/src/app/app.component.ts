import { Component } from '@angular/core';
import { Search, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-search-bar (submitted)="onTerm($event)"></app-search-bar>
      <app-page-list *ngIf="pages.length" [pages]="pages"></app-page-list>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  pages: Search[] = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
