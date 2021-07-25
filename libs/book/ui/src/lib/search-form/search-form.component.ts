import {
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
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
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    q: new FormControl('', [Validators.required]),
    langRestrict: new FormControl(''),
    orderBy: new FormControl(''),
  });

  @ViewChild('queryInput')
  queryInput: ElementRef;

  @Input()
  defaultFormParams: QueryParams;

  @Output()
  formSubmit: EventEmitter<QueryParams> = new EventEmitter<QueryParams>();

  get queryControl(): AbstractControl | null {
    return this.searchForm.get('q');
  }

  ngOnInit() {
    if (this.defaultFormParams) {
      for (const [key, value] of Object.entries(this.defaultFormParams)) {
        this.searchForm.get(key)?.setValue(value);
      }
    }
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
