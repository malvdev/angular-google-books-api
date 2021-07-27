import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { BookSingleModule, HeaderModule } from '@libs/google-books-api/book/ui';
import { MainTemplateModule } from '@libs/google-books-api/shared/ui';
import { BookFacade } from '@libs/google-books-api/book/domain';

import { BookSingleComponent } from './book-single.component';

describe('BookSingleComponent', () => {
  let component: BookSingleComponent;
  let fixture: ComponentFixture<BookSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookSingleComponent],
      imports: [
        RouterTestingModule,
        MainTemplateModule,
        BookSingleModule,
        HeaderModule,
      ],
      providers: [
        provideMockStore({}),
        BookFacade,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: '2H1_DwAAQBAJ' },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
