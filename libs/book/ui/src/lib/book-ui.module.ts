import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookItemModule } from './book-item/book-item.module';
import { BookItemListModule } from './book-item-list';
import { SearchFormModule } from './search-form';
import { BookSingleModule } from './book-single';

@NgModule({
  imports: [
    CommonModule,
    BookItemModule,
    BookItemListModule,
    SearchFormModule,
    BookSingleModule,
  ],
})
export class BookUiModule {}
