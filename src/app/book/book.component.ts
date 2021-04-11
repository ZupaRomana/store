import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Book} from './book';

@Component({
  selector: 'app-book[book]',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input()
  book: Book;

  @Output()
  bookSelected = new EventEmitter<Book>();

  onClick(): void {
    this.bookSelected.emit(this.book);
  }
}
