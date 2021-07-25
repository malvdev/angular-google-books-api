import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookItemModule } from '../book-item/book-item.module';
import { BookItemListComponent } from './book-item-list.component';

@NgModule({
  declarations: [BookItemListComponent],
  imports: [CommonModule, BookItemModule],
  exports: [BookItemListComponent],
})
export class BookItemListModule {}
