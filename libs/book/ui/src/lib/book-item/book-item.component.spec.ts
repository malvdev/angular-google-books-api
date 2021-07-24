import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BookEntity } from '@libs/google-books-api/book/domain';
import { TruncateModule } from '@libs/google-books-api/shared/pipes';

import { BookItemComponent } from './book-item.component';

describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;

  const mockBook: BookEntity = {
    id: 'FBbDwAA',
    volumeInfo: {
      title: 'Book title #1',
      description: 'Description',
      authors: ['John Doe'],
      printType: 'BOOK',
      pageCount: 100,
      publisher: 'No Starch Press',
      publishedDate: '2018-04-23',
      categories: ['Computers'],
      language: 'en',
      imageLinks: {
        thumbnail: '',
        smallThumbnail: '',
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookItemComponent],
      imports: [RouterTestingModule, TruncateModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    component.book = mockBook;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return id of the book', () => {
    expect(component.id).toBe(mockBook.id);
  });
});
