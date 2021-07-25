import { ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { QueryParams } from '@libs/google-books-api/book/domain';

@Component({
  selector: 'app-ui-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
  searchForm: FormGroup = new FormGroup({
    q: new FormControl('', [Validators.required]),
    langRestrict: new FormControl(''),
    orderBy: new FormControl(''),
  });

  @ViewChild('queryInput')
  queryInput: ElementRef;

  @Output()
  formSubmit: EventEmitter<QueryParams> = new EventEmitter<QueryParams>();

  get queryControl(): AbstractControl | null {
    return this.searchForm.get('q');
  }

  resetQueryControl(): void {
    this.queryControl?.setValue('');
    this.queryInput?.nativeElement.focus();
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      this.formSubmit.emit(this.searchForm.value as QueryParams);
    }
  }
}
