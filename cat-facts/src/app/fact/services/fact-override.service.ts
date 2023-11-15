import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { Fact, FactKey } from '../fact.model';
import { ApiPath } from '../../state/app-paths';

@Injectable({ providedIn: 'root' })
export class FactOverrideService extends DefaultDataService<Fact> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(FactKey, http, httpUrlGenerator);
  }

  override getAll(): Observable<Fact[]> {
    return this.http
      .get<Fact>(ApiPath.root + '/fact')
      .pipe(map((fact) => [fact]));
  }
}
