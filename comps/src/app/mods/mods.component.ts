import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';

const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure dignissimos quod eos aliquam ipsa.`;

export interface Item {
  title: string;
  content: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule, ModalComponent, AccordionComponent],
  templateUrl: './mods.component.html',
  styleUrls: ['./mods.component.css'],
})
export class ModsComponent {
  modalOpen = false;
  items: Item[] = [
    { title: 'This is the first question?', content },
    { title: 'This is the second question?', content },
    { title: 'This is the third question?', content },
  ];

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
