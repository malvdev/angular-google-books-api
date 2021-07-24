import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { BookEntity } from '@libs/google-books-api/book/domain';

@Component({
  selector: 'app-ui-book-item-list',
  templateUrl: './book-item-list.component.html',
  styleUrls: ['./book-item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemListComponent {
  @Input()
  books: BookEntity[];
}
