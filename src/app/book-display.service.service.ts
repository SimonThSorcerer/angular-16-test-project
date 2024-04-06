import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookDisplayService {
  books = [`author1`, `author2`, `author3`];
  constructor() { }

  displayAuthors() {
  return this.books;
}
}
