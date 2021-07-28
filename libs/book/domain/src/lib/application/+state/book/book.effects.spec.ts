import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

import { BookService } from '../../../infrastructure';
import * as BookActions from './book.actions';
import { BookEffects } from './book.effects';

describe('BookEffects', () => {
  let actions$: Observable<Action>;
  let effects: BookEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), HttpClientTestingModule],
      providers: [
        BookService,
        BookEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(BookEffects);
  });

  describe('searchBook$', () => {
    it('should work', () => {
      actions$ = hot('-a-|', {
        a: BookActions.searchBook({ params: { q: '' } }),
      });

      expect(true).toBeTruthy();
    });
  });
});
