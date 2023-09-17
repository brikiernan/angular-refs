import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private ref: ElementRef<HTMLDivElement>) {}

  ngOnInit(): void {
    document.body.appendChild(this.ref.nativeElement);
  }

  ngOnDestroy(): void {
    this.ref.nativeElement.remove();
  }

  onClose() {
    this.close.emit();
  }
}
