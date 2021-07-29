import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleComponent } from './book-single.component';

@NgModule({
  declarations: [BookSingleComponent],
  imports: [CommonModule],
  exports: [BookSingleComponent],
})
export class BookSingleModule {}
