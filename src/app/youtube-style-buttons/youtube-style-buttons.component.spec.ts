import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeStyleButtonsComponent } from './youtube-style-buttons.component';

describe('YoutubeStyleButtonsComponent', () => {
  let component: YoutubeStyleButtonsComponent;
  let fixture: ComponentFixture<YoutubeStyleButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeStyleButtonsComponent]
    });
    fixture = TestBed.createComponent(YoutubeStyleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
