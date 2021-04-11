import { Component, OnInit } from '@angular/core';
import {Book, BookDTO} from '../book/book';
import {BooksService} from '../books.service';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  selectedBook: Book;
  books$: Observable<Book[]>;

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
      this.books$ = this.booksService.getBooks$().pipe(
        tap(booksDto => console.log(booksDto)),

        map((booksDTO: BookDTO[]) => booksDTO.map((bookDTO: BookDTO) => ({
              title: bookDTO.title,
              price: bookDTO.price,
              totalPrice: bookDTO.quantity * bookDTO.price
            }))
        ),

        tap(booksDto => console.log(booksDto))
      );
    }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}
