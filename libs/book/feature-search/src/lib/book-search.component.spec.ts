import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MainTemplateModule } from '@libs/google-books-api/shared/ui';
import {
  BookItemListModule,
  SearchFormModule,
} from '@libs/google-books-api/book/ui';

import { BookSearchComponent } from './book-search.component';
import { BookService } from '@libs/google-books-api/book/domain';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookSearchComponent],
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatPaginatorModule,
        SearchFormModule,
        MainTemplateModule,
        BookItemListModule,
      ],
      providers: [
        BookService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ q: 'typescript' }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
