import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <div class="box">
      <form (submit)="onSubmit($event)">
        <input
          class="input"
          placeholder="Enter search term..."
          (input)="term = $any($event.target).value"
        />
      </form>
    </div>
  `,
  styles: [],
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  onSubmit(e: Event) {
    e.preventDefault();
    this.submitted.emit(this.term);
  }
}
