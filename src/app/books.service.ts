import { Injectable } from '@angular/core';
import {Book, BookDTO} from './book/book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }

  getBooks$(): Observable<BookDTO[]> {
    return this.http.get<BookDTO[]>('http://localhost:3000/books');
  }
}
