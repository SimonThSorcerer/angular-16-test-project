import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent4Component } from './test-component4.component';

describe('TestComponent4Component', () => {
  let component: TestComponent4Component;
  let fixture: ComponentFixture<TestComponent4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent4Component]
    });
    fixture = TestBed.createComponent(TestComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
