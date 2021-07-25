import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

import { BookDomainModule } from '@libs/google-books-api/book/domain';
import { MainTemplateModule } from '@libs/google-books-api/shared/ui';
import {
  BookItemListModule,
  SearchFormModule,
} from '@libs/google-books-api/book/ui';

import { BookSearchComponent } from './book-search.component';
import { BookFeatureSearchRoutingModule } from './book-feature-search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BookDomainModule,
    BookFeatureSearchRoutingModule,
    MatPaginatorModule,
    SearchFormModule,
    MainTemplateModule,
    BookItemListModule,
  ],
  declarations: [BookSearchComponent],
})
export class BookFeatureSearchModule {}
