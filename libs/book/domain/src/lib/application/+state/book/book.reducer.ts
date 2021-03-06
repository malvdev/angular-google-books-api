import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as BookActions from './book.actions';
import { BookEntity } from '../../../entities';

export const BOOK_FEATURE_KEY = 'book';

export interface BookError {
  error: { message: string };
}

export interface State extends EntityState<BookEntity> {
  totalItems: number;
  loaded: boolean;
  error?: null | BookError;
}

export interface BookPartialState {
  readonly [BOOK_FEATURE_KEY]: State;
}

export const bookAdapter: EntityAdapter<BookEntity> =
  createEntityAdapter<BookEntity>();

export const initialState: State = bookAdapter.getInitialState({
  totalItems: 0,
  loaded: false,
});

const bookReducer = createReducer(
  initialState,
  on(BookActions.initSearchBookPage, (state) => ({
    ...state,
    loaded: true,
    error: null,
  })),
  on(BookActions.searchBook, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BookActions.searchBookSuccess, (state, { items, totalItems }) =>
    bookAdapter.setAll(items, {
      ...state,
      loaded: true,
      error: null,
      totalItems,
    })
  ),
  on(BookActions.searchBookFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(BookActions.loadBookSuccess, (state, { book }) =>
    bookAdapter.addOne(book, {
      ...state,
      loaded: true,
      error: null,
    })
  ),
  on(BookActions.loadBookFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return bookReducer(state, action);
}
