import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../mods.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() items: Item[] = [];
  openedItemIndex = 0;

  onToggle(index: number) {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}
