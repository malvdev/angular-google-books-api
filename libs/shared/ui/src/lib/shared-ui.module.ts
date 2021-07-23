import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTemplateModule } from './main-template';

@NgModule({
  imports: [CommonModule, MainTemplateModule],
})
export class SharedUiModule {}
