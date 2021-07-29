import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  QueryParams,
  BookFacade,
  BookEntity,
  RouterQueryService,
} from '@libs/google-books-api/book/domain';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookSearchComponent implements OnInit, OnDestroy {
  books$: Observable<BookEntity[]>;
  totalItems$: Observable<number>;
  isLoaded$: Observable<boolean>;
  routeQuerySubscription$: Subscription;
  formParams: QueryParams;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _bookFacade: BookFacade,
    private readonly _routerQueryService: RouterQueryService
  ) {}

  ngOnInit(): void {
    this._bookFacade.initSearchBookPage();

    this.routeQuerySubscription$ = this._activatedRoute.queryParams.subscribe(
      (params) => {
        if (params && Object.keys(params).length !== 0) {
          this.formParams = { ...params } as QueryParams;
        }
      }
    );

    this.totalItems$ = this._bookFacade.totalItems$;
    this.isLoaded$ = this._bookFacade.bookLoaded$;
    this.books$ = this._bookFacade.books$.pipe(
      switchMap((books) => {
        if (this.formParams?.q && !books.length) {
          this.search(this.formParams);
        }

        return of(books);
      })
    );
  }

  search(params: QueryParams): void {
    this._bookFacade.searchBook(params);
    this._routerQueryService.setQuery(params);
  }

  handlePagination(event: PageEvent): void {
    this.formParams = {
      ...this.formParams,
      pageIndex: event.pageIndex,
      startIndex: this.calculateStartIndex(event.pageIndex, event.pageSize),
    };

    this.search(this.formParams);
  }

  calculateStartIndex(startIndex: number, pageSize: number): number {
    return Math.floor(startIndex * pageSize);
  }

  ngOnDestroy(): void {
    this.routeQuerySubscription$?.unsubscribe();
  }
}
