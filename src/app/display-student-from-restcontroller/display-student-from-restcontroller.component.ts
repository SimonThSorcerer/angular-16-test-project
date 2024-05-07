import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ReadStudentDataService } from '../read-student-data.service';

@Component({
  selector: 'app-display-student-from-restcontroller',
  templateUrl: './display-student-from-restcontroller.component.html',
  styleUrls: ['./display-student-from-restcontroller.component.css']
})
export class DisplayStudentFromRestcontrollerComponent {
  data: any;

  constructor (private readStudentDataService : ReadStudentDataService) {}

  ngOnInit():void {
    this.getDataFromBackend();
  }

  getDataFromBackend() {
   this.readStudentDataService.getData().subscribe((result: any) => {
    this.data = result;
  });
  }
}
