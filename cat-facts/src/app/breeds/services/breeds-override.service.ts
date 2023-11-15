import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  DefaultDataService,
  DefaultDataServiceConfig,
  HttpUrlGenerator,
} from '@ngrx/data';

import { ApiPath } from '../../state/app-paths';
import { Breed, BreedsKey } from '../breeds.model';

@Injectable({ providedIn: 'root' })
export class BreedsOverrideService extends DefaultDataService<Breed> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    config: DefaultDataServiceConfig
  ) {
    super(BreedsKey, http, httpUrlGenerator, config);
  }

  override getAll(): Observable<Breed[]> {
    return this.http
      .get<{ data: Breed[] }>(ApiPath.root + '/breeds')
      .pipe(map((breed) => breed.data));
  }
}
