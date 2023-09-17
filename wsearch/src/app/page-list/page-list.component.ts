import { Component, Input } from '@angular/core';
import { Search } from '../wikipedia.service';

@Component({
  selector: 'app-page-list',
  template: `
    <table class="table is-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Word Count</th>
          <th>Snippet</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let page of pages">
          <td>
            <a
              [href]="'https://en.wikipedia.org?curid=' + page.pageid"
              target="_blank"
              >{{ page.title }}</a
            >
          </td>
          <td>{{ page.wordcount }}</td>
          <td [innerHTML]="page.snippet"></td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class PageListComponent {
  @Input({ required: true }) pages: Search[] = [];
}
