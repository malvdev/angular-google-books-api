import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookSearchComponent } from './book-search.component';

const routes: Routes = [{ path: 'search', component: BookSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BookFeatureSearchRoutingModule {}
