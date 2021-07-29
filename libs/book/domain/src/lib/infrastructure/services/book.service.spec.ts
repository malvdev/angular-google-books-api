import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { cold } from 'jest-marbles';

import { API_PATH, BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;
  let http: HttpClient;

  const data = {
    title: 'Book Title',
    author: 'John Doe',
    volumeId: '7536258',
  };

  const books = {
    totalItems: 2,
    items: [
      { id: '56958', volumeInfo: { title: 'First Title' } },
      { id: '21578', volumeInfo: { title: 'Second Title' } },
    ],
  };

  const queryParams = {
    q: 'Book Title',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: { get: jest.fn() } },
        BookService,
      ],
    });
    service = TestBed.inject(BookService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the search api and return the search results', () => {
    const response = cold('-a|', { a: books });
    const expected = cold('-b|', {
      b: { totalItems: books.totalItems, items: books.items },
    });
    http.get = jest.fn(() => response);

    const encodeQuery = service.encodeQuery(queryParams);
    expect(service.searchBooks(queryParams)).toBeObservable(expected);
    expect(http.get).toHaveBeenCalledWith(`${API_PATH}?${encodeQuery}`);
  });

  it('should retrieve the book from the volumeId', () => {
    const response = cold('-a|', { a: data });
    const expected = cold('-b|', { b: data });
    http.get = jest.fn(() => response);

    expect(service.retrieveBook(data.volumeId)).toBeObservable(expected);
    expect(http.get).toHaveBeenCalledWith(`${API_PATH}/${data.volumeId}`);
  });
});
