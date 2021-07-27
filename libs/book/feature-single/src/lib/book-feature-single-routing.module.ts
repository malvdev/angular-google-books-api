import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookSingleComponent } from './book-single.component';

const routes: Routes = [{ path: 'book/:id', component: BookSingleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BookFeatureSearchRoutingModule {}
