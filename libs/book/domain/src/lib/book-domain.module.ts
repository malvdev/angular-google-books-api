import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  BOOK_FEATURE_KEY,
  reducer as BookReducer,
  BookEffects,
} from './application/+state/book';

import { BookService } from './infrastructure';
import { BookFacade } from './application';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(BOOK_FEATURE_KEY, BookReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
  providers: [BookService, BookFacade],
})
export class BookDomainModule {}
