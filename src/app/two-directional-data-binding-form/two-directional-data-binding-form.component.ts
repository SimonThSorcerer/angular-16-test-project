import { Component } from '@angular/core';

@Component({
  selector: 'app-two-directional-data-binding-form',
  templateUrl: './two-directional-data-binding-form.component.html',
  styleUrls: ['./two-directional-data-binding-form.component.css']
})
export class TwoDirectionalDataBindingFormComponent {

 inputPostTitle: string = "";
 inputPostBody: string = "";
 submittedTitle: string = "";
 submittedBody: string = "";
 inputBackgroundColor: string = "";
 newBackgroundColor: string="";


 submitForm() {
  console.log('Title: ', this.inputPostTitle);
  this.submittedTitle = this.inputPostTitle
  console.log('Body: ', this.inputPostBody);
  this.submittedBody = this.inputPostBody;
  console.log('background-color: ' + this.newBackgroundColor)
  this.newBackgroundColor = this.inputBackgroundColor;
  }

  getPostTitleStyle() {
    return {'background-color': this.newBackgroundColor};

  }

  getPostBodyStyle(){


  }

}
