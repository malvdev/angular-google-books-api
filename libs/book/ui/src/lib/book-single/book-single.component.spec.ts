import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookEntity } from '@libs/google-books-api/book/domain';

import { BookSingleComponent } from './book-single.component';

describe('BookSingleComponent', () => {
  let component: BookSingleComponent;
  let fixture: ComponentFixture<BookSingleComponent>;

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
      industryIdentifiers: [{ type: 'ISBN', identifier: '34534534' }],
      language: 'en',
      imageLinks: {
        small: '',
        smallThumbnail: '',
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookSingleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSingleComponent);
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
