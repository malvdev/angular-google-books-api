import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookItemModule } from './book-item/book-item.module';
import { BookItemListModule } from './book-item-list/book-item-list.module';

@NgModule({
  imports: [CommonModule, BookItemModule, BookItemListModule],
})
export class BookUiModule {}
