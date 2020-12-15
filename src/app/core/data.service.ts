import { allBooks, allReaders } from 'app/data';

import { Book } from "app/models/book";
import { BookTrackerError } from 'app/models/bookTrackerError';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Reader } from "app/models/reader";

// Preparing to use HTTPCLIENT in project




@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  // Data from server expected to come in JSON format
  getAllBooks(): Book[] {
    this.http.get<Book[]>('/api/books');
  }

  getBookById(id: number): Book {
    return allBooks.find(book => book.bookID === id);
  }
}
