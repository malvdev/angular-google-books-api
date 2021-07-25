import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { QueryParams } from '@libs/google-books-api/book/domain';

import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFormComponent],
      imports: [
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 3 controls', () => {
    expect(component.searchForm.contains('q')).toBeTruthy();
    expect(component.searchForm.contains('langRestrict')).toBeTruthy();
    expect(component.searchForm.contains('orderBy')).toBeTruthy();
  });

  it('should mark q as invalid if empty value', () => {
    const control = component.searchForm.get('q');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should mark q as valid if value not empty', () => {
    const control = component.searchForm.get('q');
    control?.setValue('typescript');
    expect(control?.valid).toBeTruthy();
  });

  it('should reset control q to its initial value', () => {
    const control = component.searchForm.get('q');
    control?.setValue('typescript');
    component.resetQueryControl();
    expect(control?.value).toBe('');
  });

  it('submitting a form emits a auth', () => {
    const mockQuery = 'typescript';
    const mockLangRestrict = 'en';
    const mockOrderBy = 'newest';

    expect(component.searchForm.valid).toBeFalsy();
    component.searchForm.get('q')?.setValue(mockQuery);
    component.searchForm.get('langRestrict')?.setValue(mockLangRestrict);
    component.searchForm.get('orderBy')?.setValue(mockOrderBy);
    expect(component.searchForm.valid).toBeTruthy();

    let form: QueryParams | undefined;
    component.formSubmit.subscribe((value) => (form = value));
    component.onSubmit();

    expect(form?.q).toBe(mockQuery);
    expect(form?.langRestrict).toBe(mockLangRestrict);
    expect(form?.orderBy).toBe(mockOrderBy);
  });
});
