import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { MainTemplateModule } from '@libs/google-books-api/shared/ui';
import {
  BookItemListModule,
  SearchFormModule,
} from '@libs/google-books-api/book/ui';
import { BookFacade } from '@libs/google-books-api/book/domain';

import { BookSearchComponent } from './book-search.component';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookSearchComponent],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        MatPaginatorModule,
        SearchFormModule,
        MainTemplateModule,
        BookItemListModule,
      ],
      providers: [
        provideMockStore({}),
        BookFacade,
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
