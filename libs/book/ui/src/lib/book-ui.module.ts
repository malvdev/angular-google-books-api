import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookItemModule } from './book-item/book-item.module';

@NgModule({
  imports: [CommonModule, BookItemModule],
})
export class BookUiModule {}
