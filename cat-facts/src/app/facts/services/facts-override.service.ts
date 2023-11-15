import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  DefaultDataService,
  DefaultDataServiceConfig,
  HttpUrlGenerator,
} from '@ngrx/data';

import { Fact, FactsKey } from '../facts.model';
import { ApiPath } from '../../state/app-paths';

@Injectable({ providedIn: 'root' })
export class FactsOverrideService extends DefaultDataService<Fact> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    config: DefaultDataServiceConfig
  ) {
    super(FactsKey, http, httpUrlGenerator, config);
  }

  override getAll(): Observable<Fact[]> {
    return this.http
      .get<{ data: Fact[] }>(ApiPath.root + '/facts')
      .pipe(map((fact) => fact.data));
  }
}
