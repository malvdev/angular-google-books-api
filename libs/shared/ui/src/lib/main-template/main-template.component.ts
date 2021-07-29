import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shared-ui-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTemplateComponent {}
