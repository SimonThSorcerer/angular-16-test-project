import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent2Component } from './test-component2/test-component2.component';
import { CoursesComponent } from './course-component/courses-component';
import { TestComponent4Component } from './test-component4/test-component4.component';
import { CourseService } from './course.service';
import { BooksDisplayTestComponent } from './books-display-test/books-display-test.component';
import { PointerComponent } from './pointer/pointer.component';
import { SimonTest1Component } from './simon-test-1/simon-test-1.component';
import { YoutubeStyleButtonsComponent } from './youtube-style-buttons/youtube-style-buttons.component';
import { YoutubeStyleVideoTitleComponent } from './youtube-style-video-title/youtube-style-video-title.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent2Component,
    CoursesComponent,
    TestComponent4Component,
    BooksDisplayTestComponent,
    PointerComponent,
    SimonTest1Component,
    YoutubeStyleButtonsComponent,
    YoutubeStyleVideoTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
 