import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input({ required: true }) name?: string | null = '';
  @Input({ required: true }) cardNumber?: string | null = '';
  @Input({ required: true }) expiration?: string | null = '';
}
