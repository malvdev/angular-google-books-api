import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { BookEntity, BookFacade } from '@libs/google-books-api/book/domain';

@Component({
  selector: 'app-book-book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookSingleComponent implements OnInit {
  id: string;
  book$: Observable<BookEntity | undefined>;

  constructor(
    private readonly _bookFacade: BookFacade,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params.id;
    this.book$ = this._bookFacade.getBookByID(this.id);
  }
}
