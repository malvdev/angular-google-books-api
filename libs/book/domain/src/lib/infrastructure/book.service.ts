import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BookEntity, VolumeId } from '../entities';

export const API_PATH = 'https://www.googleapis.com/books/v1/volumes';

export interface QueryParams {
  q: string;
  langRestrict?: string;
  orderBy?: string;
  startIndex?: number;
  pageIndex?: number;
  maxResults?: number;
}

export interface BooksResponse {
  totalItems: number;
  items: BookEntity[];
}

@Injectable()
export class BookService {
  private readonly _apiPath: string = API_PATH;

  constructor(private readonly _http: HttpClient) {}

  searchBooks(params: QueryParams): Observable<BooksResponse> {
    const query = this.encodeQuery(params);
    return this._http
      .get<BooksResponse>(`${this._apiPath}?${query}`)
      .pipe(
        map((books) => ({
          totalItems: books.totalItems,
          items: books.items || [],
        }))
      );
  }

  retrieveBook(volumeId: VolumeId): Observable<BookEntity> {
    return this._http.get<BookEntity>(`${this._apiPath}/${volumeId}`);
  }

  encodeQuery(params: QueryParams): string {
    return Object.keys(params)
      .map((key) => {
        const k = params[key as keyof QueryParams];
        return k ? `${encodeURIComponent(key)}=${encodeURIComponent(k)}` : null;
      })
      .filter((str) => str)
      .join('&');
  }
}
