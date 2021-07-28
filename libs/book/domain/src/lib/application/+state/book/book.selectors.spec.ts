import { bookAdapter, BookPartialState, initialState } from './book.reducer';
import * as BookSelectors from './book.selectors';
import { BookEntity } from '../../../entities';

describe('Book Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBookId = (it: BookEntity) => it.id;
  const createBookEntity = (id: string) => ({
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

  let state: BookPartialState;

  beforeEach(() => {
    state = {
      book: bookAdapter.setAll(
        [
          createBookEntity('PRODUCT-AAA'),
          createBookEntity('PRODUCT-BBB'),
          createBookEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Book Selectors', () => {
    it('getAllBook() should return the list of Book', () => {
      const results = BookSelectors.getAllBook(state);
      const selId = getBookId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getBookLoaded() should return the current "loaded" status', () => {
      const result = BookSelectors.getBookLoaded(state);

      expect(result).toBe(true);
    });

    it('getBookError() should return the current "error" state', () => {
      const result = BookSelectors.getBookError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
