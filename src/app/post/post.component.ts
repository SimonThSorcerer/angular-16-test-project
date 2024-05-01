import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  title: string = `List of posts`;
  messagePost: string = `Message Post`;
  toPostListComponentThroughImport: string = `This is coming from the post component through import!!!!!!!!!!!!!!!`;
  toAppPostListThroughComponentTageAndPropertyBinding:string = `!!!!!!!!!!!This should be displayed in the post-list component, coming from the post component via .`

  childMessage:string = `From child component using @ViewChild.`

  outputChildMessage:string = `Message from Child Component via Output.`;

  @Output()
  messageEvent = new EventEmitter<string>();

  @Input()
  fromParent!: string;


  constructor() {
    // this.title = this.title
  }

  ngOnInit(): void{

  }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }

}
