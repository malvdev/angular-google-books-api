import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TruncateModule } from '@libs/google-books-api/shared/pipes';

import { BookItemComponent } from './book-item.component';

@NgModule({
  declarations: [BookItemComponent],
  imports: [CommonModule, RouterModule, TruncateModule],
  exports: [BookItemComponent],
})
export class BookItemModule {}
