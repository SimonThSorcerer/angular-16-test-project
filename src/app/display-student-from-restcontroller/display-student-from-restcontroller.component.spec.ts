import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStudentFromRestcontrollerComponent } from './display-student-from-restcontroller.component';

describe('DisplayStudentFromRestcontrollerComponent', () => {
  let component: DisplayStudentFromRestcontrollerComponent;
  let fixture: ComponentFixture<DisplayStudentFromRestcontrollerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayStudentFromRestcontrollerComponent]
    });
    fixture = TestBed.createComponent(DisplayStudentFromRestcontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
