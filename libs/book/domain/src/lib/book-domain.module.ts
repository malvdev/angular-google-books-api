import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromBook from './application/+state/book/book.reducer';
import { BookEffects } from './application/+state/book/book.effects';

import { BookService } from './infrastructure';
import { BookFacade } from './application';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBook.BOOK_FEATURE_KEY, fromBook.reducer),
    EffectsModule.forFeature([BookEffects]),
  ],
  providers: [BookService, BookFacade],
})
export class BookDomainModule {}
