import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { BookEntity } from '@libs/google-books-api/book/domain';

@Component({
  selector: 'app-ui-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent {
  @Input()
  book: BookEntity;

  get id(): string {
    return this.book.id;
  }

  get title(): string {
    return this.book.volumeInfo.title;
  }

  get description(): string {
    return this.book.volumeInfo.description;
  }

  get publishedDate(): string {
    return this.book.volumeInfo.publishedDate;
  }

  get authors(): string[] {
    return this.book.volumeInfo.authors;
  }

  get thumbnail(): string | undefined {
    return (
      this.book.volumeInfo.imageLinks?.smallThumbnail ||
      this.book.volumeInfo.imageLinks?.thumbnail
    );
  }
}
