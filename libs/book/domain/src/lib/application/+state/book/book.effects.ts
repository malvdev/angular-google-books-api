import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { BookService } from '../../../infrastructure';
import * as BookActions from './book.actions';

@Injectable()
export class BookEffects {
  searchBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.searchBook),
      map((action) => action.params),
      concatMap((params) =>
        this._bookService.searchBooks(params).pipe(
          map((response) =>
            BookActions.searchBookSuccess({
              totalItems: response.totalItems,
              items: response.items,
            })
          ),
          catchError((error) => of(BookActions.searchBookFailure(error)))
        )
      )
    );
  });

  loadBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBook),
      map((action) => action.id),
      concatMap((id) =>
        this._bookService.retrieveBook(id).pipe(
          map((response) =>
            BookActions.loadBookSuccess({
              book: response,
            })
          ),
          catchError((error) => of(BookActions.loadBookFailure(error)))
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly _bookService: BookService
  ) {}
}
