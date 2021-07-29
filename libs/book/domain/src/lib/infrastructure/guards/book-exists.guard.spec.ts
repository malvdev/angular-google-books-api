import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { BookFacade } from '../../application';
import { BookExistsGuard } from './book-exists.guard';

describe('BookExistsGuard', () => {
  let guard: BookExistsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [provideMockStore({}), BookExistsGuard, BookFacade],
    });
    guard = TestBed.inject(BookExistsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
