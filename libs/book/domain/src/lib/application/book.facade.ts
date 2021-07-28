import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as BookActions from './+state/book/book.actions';
import * as BookSelectors from './+state/book/book.selectors';
import { QueryParams } from '../infrastructure';
import { VolumeId } from '../entities';

@Injectable()
export class BookFacade {
  books$ = this._store.select(BookSelectors.getAllBook);
  totalItems$ = this._store.select(BookSelectors.getBookTotalItems);
  bookLoaded$ = this._store.select(BookSelectors.getBookLoaded);

  constructor(private readonly _store: Store) {}

  getBookByID(id: VolumeId) {
    return this._store.select(BookSelectors.selectEntitiesByID(id));
  }

  searchBook(params: QueryParams): void {
    this._store.dispatch(BookActions.searchBook({ params }));
  }

  loadBook(id: VolumeId): void {
    return this._store.dispatch(BookActions.loadBook({ id }));
  }
}
