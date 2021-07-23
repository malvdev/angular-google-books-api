import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSearchComponent } from './book-search.component';
import { BookFeatureSearchRoutingModule } from './book-feature-search-routing.module';

@NgModule({
  imports: [CommonModule, BookFeatureSearchRoutingModule],
  declarations: [BookSearchComponent],
})
export class BookFeatureSearchModule {}
