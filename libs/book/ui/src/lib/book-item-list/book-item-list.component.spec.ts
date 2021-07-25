import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemListComponent } from './book-item-list.component';

describe('BookItemListComponent', () => {
  let component: BookItemListComponent;
  let fixture: ComponentFixture<BookItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookItemListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
