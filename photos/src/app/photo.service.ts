import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

interface UnsplashResponse {
  description: string;
  urls: {
    regular: string;
    small: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  random() {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: 'Client-ID UNSPLASH_API_KEY_HERE',
        },
      })
      .pipe(map((value) => value.urls.small));
  }
}
