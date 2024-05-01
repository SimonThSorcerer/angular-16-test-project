import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube-style-video-title',
  templateUrl: './youtube-style-video-title.component.html',
  styleUrls: ['./youtube-style-video-title.component.css']
})

export class YoutubeStyleVideoTitleComponent {
  x: number = 2;
  y: number = 3;
  exampleClass: string;

  constructor() {
    this.exampleClass = `example-class${this.x}test${this.y}`;
  }
}
