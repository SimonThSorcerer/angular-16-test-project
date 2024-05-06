import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDirectionalDataBindingFormComponent } from './two-directional-data-binding-form.component';

describe('TwoDirectionalDataBindingFormComponent', () => {
  let component: TwoDirectionalDataBindingFormComponent;
  let fixture: ComponentFixture<TwoDirectionalDataBindingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoDirectionalDataBindingFormComponent]
    });
    fixture = TestBed.createComponent(TwoDirectionalDataBindingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
