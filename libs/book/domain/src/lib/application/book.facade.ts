import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class BookFacade {
  constructor(private readonly _store: Store) {}
}
