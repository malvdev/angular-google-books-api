import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookExistsGuard } from '@libs/google-books-api/book/domain';

import { BookSingleComponent } from './book-single.component';

const routes: Routes = [
  {
    path: 'book/:id',
    component: BookSingleComponent,
    canActivate: [BookExistsGuard],
    data: {
      title: 'Single book',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BookFeatureSearchRoutingModule {}
