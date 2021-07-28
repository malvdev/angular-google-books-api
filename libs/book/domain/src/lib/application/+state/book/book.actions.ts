import { createAction, props } from '@ngrx/store';

import { BookEntity, VolumeId } from '../../../entities';
import { BooksResponse, QueryParams } from '../../../infrastructure';
import { BookError } from './book.reducer';

export const initSearchBookPage = createAction(
  '[book-search] Init Search Book Page'
);

export const searchBook = createAction(
  '[book-search] Search book',
  props<{ params: QueryParams }>()
);

export const searchBookSuccess = createAction(
  '[book-search/API] Search Book Success',
  props<BooksResponse>()
);

export const searchBookFailure = createAction(
  '[book-search/API] Search Book Failure',
  props<{ error: BookError }>()
);

export const loadBook = createAction(
  '[book] Load book',
  props<{ id: VolumeId }>()
);

export const loadBookSuccess = createAction(
  '[book/API] Load Book Success',
  props<{ book: BookEntity }>()
);

export const loadBookFailure = createAction(
  '[book/API] Load Book Failure',
  props<{ error: BookError }>()
);
