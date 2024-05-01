import { Component, EventEmitter, Output} from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent {
postComponent = new PostComponent();
comingFromPostComponentThroughImport: string = this.postComponent.toPostListComponentThroughImport;

@Input()
comingFromPostComponentThroughComponentTagAndPropertyBinding!: string;

@Output()
messageEvent = new EventEmitter<string>();


constructor () {
  // this.fromPost = this.fromPost;
}
ngOnInit(): void{

}

}
