import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { BookEntity, VolumeId } from '../entities';
import * as BookActions from './+state/book/book.actions';
import * as BookSelectors from './+state/book/book.selectors';
import { QueryParams } from '../infrastructure';

@Injectable()
export class BookFacade {
  books$ = this._store.select(BookSelectors.getAllBook);
  totalItems$ = this._store.select(BookSelectors.getBookTotalItems);
  bookLoaded$ = this._store.select(BookSelectors.getBookLoaded);
  error$ = this._store.select(BookSelectors.getBookError);

  constructor(private readonly _store: Store) {}

  getBookByID(id: VolumeId): Observable<BookEntity | undefined> {
    return this._store.select(BookSelectors.selectEntitiesByID(id));
  }

  initSearchBookPage(): void {
    this._store.dispatch(BookActions.initSearchBookPage());
  }

  searchBook(params: QueryParams): void {
    this._store.dispatch(BookActions.searchBook({ params }));
  }

  loadBook(id: VolumeId): void {
    this._store.dispatch(BookActions.loadBook({ id }));
  }
}
