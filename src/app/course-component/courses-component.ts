import {Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
selector: 'courses',  //this one is a css selector, in case of <div class="courses"> .courses, in case of <div id="course" #courses
template: `
<h2>{{ "Title: " + title + getSomething()}}</h2>

<ul>
<li *ngFor="let testItem of testArray">
{{testItem }}
</li>
</ul>`,
// templateUrl: './courses.component.html'
})

export class CoursesComponent {
title = "Testing title";

getSomething() {
  return ' ' + 234324243 + ' ' + this.title;

}

testArray;

//adding the service through dependency injection, don'1't forget to add the Service to providers: in app.module.ts
constructor (testArray: CourseService) {
  this.testArray = testArray.getCourses();
}


//logic of calling of an HTTP service



}




