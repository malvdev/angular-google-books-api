import { Action } from '@ngrx/store';

import { BookEntity } from '../../../entities';
import * as BookActions from './book.actions';
import { State, initialState, reducer } from './book.reducer';

describe('Book Reducer', () => {
  const createBookEntity = (id: string): BookEntity => ({
    id,
    volumeInfo: {
      title: 'Title book',
      authors: [],
      printType: 'BOOK',
      pageCount: 100,
      description: 'Description',
      publisher: '',
      publishedDate: '2017-09-05',
      categories: [],
      language: 'en',
      imageLinks: {},
    },
  });

  describe('valid Book actions', () => {
    it('searchBookSuccess should return the list of known Book', () => {
      const book = [
        createBookEntity('PRODUCT-AAA'),
        createBookEntity('PRODUCT-zzz'),
      ];
      const action = BookActions.searchBookSuccess({
        totalItems: book.length,
        items: book,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });

    it('loadBookSuccess should return the list of known Book', () => {
      const book = createBookEntity('PRODUCT-AAA');
      const action = BookActions.loadBookSuccess({
        book,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(1);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
