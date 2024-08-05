import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class BookComponent {
  title: string = '';
  author: string = '';

  addBook() {
    const book = { title: this.title, author: this.author };
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    this.title = '';
    this.author = '';
    console.log('Book added:', book);
  }

  getBooks() {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
  }

  deleteBook(index: number) {
    const books = this.getBooks();
    if (index > -1) {
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
      console.log('Book deleted at index:', index);
    }
  }
}

