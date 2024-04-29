import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeStyleVideoTitleComponent } from './youtube-style-video-title.component';

describe('YoutubeStyleVideoTitleComponent', () => {
  let component: YoutubeStyleVideoTitleComponent;
  let fixture: ComponentFixture<YoutubeStyleVideoTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeStyleVideoTitleComponent]
    });
    fixture = TestBed.createComponent(YoutubeStyleVideoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
