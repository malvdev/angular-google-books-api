import { Input } from '@angular/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  BookEntity,
  IndustryIdentifier,
} from '@libs/google-books-api/book/domain';

@Component({
  selector: 'app-ui-book-single',
  templateUrl: './book-single.component.html',
  styleUrls: ['./book-single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookSingleComponent {
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

  get publisher(): string {
    return this.book.volumeInfo.publisher;
  }

  get pageCount(): number {
    return this.book.volumeInfo.pageCount;
  }

  get authors(): string[] {
    return this.book.volumeInfo.authors;
  }

  get categories(): string[] {
    return this.book.volumeInfo.categories;
  }

  get industryIdentifiers(): IndustryIdentifier[] | undefined {
    return this.book.volumeInfo?.industryIdentifiers;
  }

  get thumbnail(): string | undefined {
    return (
      this.book.volumeInfo.imageLinks?.smallThumbnail ||
      this.book.volumeInfo.imageLinks?.small
    );
  }
}
