import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestComponent2Component } from './test-component2/test-component2.component';
import { CoursesComponent } from './course-component/courses-component';
import { TestComponent4Component } from './test-component4/test-component4.component';
import { CourseService } from './course.service';
import { BooksDisplayTestComponent } from './books-display-test/books-display-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponent2Component,
    CoursesComponent,
    TestComponent4Component,
    BooksDisplayTestComponent
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
