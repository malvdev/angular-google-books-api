import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

import {
  BookService,
  QueryParams,
  BooksResponse,
} from '@libs/google-books-api/book/domain';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookSearchComponent implements OnInit {
  books$: Observable<BooksResponse>;
  totalItems$: Observable<number>;
  isLoading$: Observable<boolean>;
  formParams: QueryParams;

  constructor(
    private readonly _bookService: BookService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      if (params && Object.keys(params).length === 0) {
        this.formParams = params as QueryParams;

        if (this.formParams?.q) {
          this.search(this.formParams);
        }
      }
    });
  }

  search(params: QueryParams): void {
    this.formParams = params;
    this.books$ = this._bookService.searchBooks(params);
    this.setRouterQueryParams(this.formParams);
  }

  handlePageEvent(event: PageEvent): void {
    this.books$ = this._bookService.searchBooks({
      ...this.formParams,
      startIndex: this.calculateStartIndex(event.pageIndex, event.pageSize),
    });
  }

  private calculateStartIndex(
    startIndex: number = 0,
    pageSize: number
  ): number {
    return Math.floor(startIndex * pageSize);
  }

  private setRouterQueryParams(queryParams: QueryParams): void {
    if (queryParams?.q) {
      this._router.navigate([], {
        relativeTo: this._activatedRoute,
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      });
    }
  }
}
