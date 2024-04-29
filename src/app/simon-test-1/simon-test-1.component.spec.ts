import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonTest1Component } from './simon-test-1.component';

describe('SimonTest1Component', () => {
  let component: SimonTest1Component;
  let fixture: ComponentFixture<SimonTest1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimonTest1Component]
    });
    fixture = TestBed.createComponent(SimonTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
