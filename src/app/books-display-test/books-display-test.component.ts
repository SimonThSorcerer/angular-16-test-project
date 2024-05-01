import { Component } from '@angular/core';
import { BookDisplayService } from '../book-display.service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-display-test', //<app-books-display-test></app-books-display-test>
//   template: `<ul>
// <li *ngFor="let book of books">
// {{book}}
// </li>
// </ul>`,

templateUrl: './books-display-test.component.html',
  styleUrls: ['./books-display-test.component.css']
})



export class BooksDisplayTestComponent {
  title: string = `Testing title`;
  book: string = `test`;
  submittedData: string = '';

bookdisplayService = new BookDisplayService();
books = this.bookdisplayService.displayAuthors();

  setBook(books: string[]) {
    this.books = books;
  }

  message(something: string) {
    this.title = something;
  }

  submitForm() {
    console.log(`Submitted data:`, this.submittedData)
  }

  onInput() {
console.log(this.submittedData)
  }

}
