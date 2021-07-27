import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { BookEntity, BookFacade } from '@libs/google-books-api/book/domain';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-book-book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookSingleComponent implements OnInit, OnDestroy {
  id: string;
  book$: Observable<BookEntity | undefined>;
  subscription$: Subscription;

  constructor(
    private readonly _bookFacade: BookFacade,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params.id;
    this.book$ = this._bookFacade.getBookByID(this.id);
    this.subscription$ = this.book$.pipe(take(1)).subscribe((book) => {
      if (!book) {
        this._bookFacade.loadBook(this.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
