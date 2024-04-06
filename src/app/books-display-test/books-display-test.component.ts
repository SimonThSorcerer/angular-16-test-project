import { Component } from '@angular/core';
import { BookDisplayService } from '../book-display.service.service';

@Component({
  selector: 'app-books-display-test', //<app-books-display-test></app-books-display-test>
  template: `<ul>
<li *ngFor="let book of books">
{{book}}
</li>
</ul>`,
  styleUrls: ['./books-display-test.component.css']
})
export class BooksDisplayTestComponent {
  title = `Testing title`;
  book = `test`;

bookdisplayService = new BookDisplayService();
books = this.bookdisplayService.displayAuthors();



  setBook(books: string[]) {
    this.books = books;
  }


}
