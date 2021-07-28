import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Observable, Subscription } from 'rxjs';

import {
  QueryParams,
  BookFacade,
  BookEntity,
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
  activatedRouteSubscription$: Subscription;
  formParams: QueryParams;

  constructor(
    private readonly _bookFacade: BookFacade,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._bookFacade.initSearchBookPage();

    this.activatedRouteSubscription$ =
      this._activatedRoute.queryParams.subscribe((params) => {
        if (params && Object.keys(params).length !== 0) {
          this.formParams = { ...params } as QueryParams;
        }
      });

    if (this.formParams?.q) {
      this.search(this.formParams);
    }

    this.totalItems$ = this._bookFacade.totalItems$;
    this.isLoaded$ = this._bookFacade.bookLoaded$;
    this.books$ = this._bookFacade.books$;
  }

  search(params: QueryParams): void {
    this.formParams = { ...params };
    this._bookFacade.searchBook(this.formParams);
    this.setRouterQueryParams(this.formParams);
  }

  handlePageEvent(event: PageEvent): void {
    const params = {
      ...this.formParams,
      pageIndex: event.pageIndex,
      startIndex: this.calculateStartIndex(event.pageIndex, event.pageSize),
    };

    this._bookFacade.searchBook(params);
    this.setRouterQueryParams(params);
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription$?.unsubscribe();
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
        queryParams: this.removeEmpty(queryParams),
        queryParamsHandling: '',
      });
    }
  }

  private removeEmpty(obj: QueryParams) {
    return Object.entries(obj)
      .filter(([_, v]) => v !== '')
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
  }
}
