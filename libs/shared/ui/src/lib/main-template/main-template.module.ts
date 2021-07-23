import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTemplateComponent } from './main-template.component';

@NgModule({
  declarations: [MainTemplateComponent],
  imports: [CommonModule],
  exports: [MainTemplateComponent],
})
export class MainTemplateModule {}
