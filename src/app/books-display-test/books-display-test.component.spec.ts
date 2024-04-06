import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDisplayTestComponent } from './books-display-test.component';

describe('BooksDisplayTestComponent', () => {
  let component: BooksDisplayTestComponent;
  let fixture: ComponentFixture<BooksDisplayTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksDisplayTestComponent]
    });
    fixture = TestBed.createComponent(BooksDisplayTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
