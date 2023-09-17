import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="photoUrl">
      <img [src]="photoUrl" />
      <button (click)="getPhoto()">Next Photo</button>
    </div>
  `,
  styles: [
    `
      img {
        float: left;
      }
    `,
  ],
})
export class PhotoComponent implements OnInit {
  photoUrl: string = '';

  constructor(private photo: PhotoService) {}

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this.photo.random().subscribe((photoUrl) => {
      this.photoUrl = photoUrl;
    });
  }
}
