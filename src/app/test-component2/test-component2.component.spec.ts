import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2Component } from './test-component2.component';

describe('TestComponent2Component', () => {
  let component: TestComponent2Component;
  let fixture: ComponentFixture<TestComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent2Component]
    });
    fixture = TestBed.createComponent(TestComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
