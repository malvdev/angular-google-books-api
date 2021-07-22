import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookService } from './infrastructure';

@NgModule({
  imports: [CommonModule],
  providers: [BookService],
})
export class BookDomainModule {}
