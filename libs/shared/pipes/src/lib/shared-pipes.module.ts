import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncateModule } from './truncate';

@NgModule({
  imports: [CommonModule, TruncateModule],
})
export class SharedPipesModule {}
