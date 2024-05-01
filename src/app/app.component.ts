import { Component, ViewChild, AfterViewInit, AfterContentChecked} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  title:string = `Mock Youtube Practice Angular App`;
  parentMessage:string = `Message coming from the parent component.`;
  outputChildMessage: string = `Message from Child Component Via Output`;
  fromPostComponentVariableDeclared!: string;
  parentMessage2: string = "TEST%+%/!+%";


 @ViewChild(PostComponent)
  childComp!: PostComponent;

  constructor() {

  }

  ngAfterContentChecked(): void {
  //   console.log(this.childComp.childMessage);
  // this.fromPostComponentVariableDeclared = this.childComp.childMessage;
  }

ngAfterViewInit(): void {
  console.log(this.childComp.childMessage);
  this.fromPostComponentVariableDeclared = this.childComp.childMessage;
  //But this generates an erro best not to use it.
}

//event coming from
reciveMessage($event : string) {
console.log($event);
}

}

