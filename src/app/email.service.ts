import { Injectable } from '@angular/core';
import { CoursesComponent } from './course-component/courses-component';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(testing: CoursesComponent) { }
}
