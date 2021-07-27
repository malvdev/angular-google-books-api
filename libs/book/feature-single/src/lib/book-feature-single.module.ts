import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleModule, HeaderModule } from '@libs/google-books-api/book/ui';
import { MainTemplateModule } from '@libs/google-books-api/shared/ui';

import { BookSingleComponent } from './book-single.component';
import { BookFeatureSearchRoutingModule } from './book-feature-single-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BookFeatureSearchRoutingModule,
    MainTemplateModule,
    BookSingleModule,
    HeaderModule,
  ],
  declarations: [BookSingleComponent],
  exports: [BookSingleComponent],
})
export class BookFeatureSingleModule {}
