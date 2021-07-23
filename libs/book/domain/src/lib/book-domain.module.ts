import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookService } from './infrastructure';
import { BookFacade } from './application';

@NgModule({
  imports: [CommonModule],
  providers: [BookService, BookFacade],
})
export class BookDomainModule {}
