import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BookEntity } from '../entities';

export const API_PATH = 'https://www.googleapis.com/books/v1/volumes';

@Injectable()
export class BookService {
  private readonly _apiPath: string = API_PATH;

  constructor(private readonly _http: HttpClient) {}

  searchBooks(queryTitle: string): Observable<BookEntity[]> {
    return this._http
      .get<{ items: BookEntity[] }>(`${this._apiPath}?q=${queryTitle}`)
      .pipe(map((books) => books.items || []));
  }

  retrieveBook(volumeId: string): Observable<BookEntity> {
    return this._http.get<BookEntity>(`${this._apiPath}/${volumeId}`);
  }
}
