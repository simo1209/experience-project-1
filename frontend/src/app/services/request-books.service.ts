import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BooksRequest } from '../models/book-request.module';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class RequestBooksService {
  bookListURL: string = "http://192.168.1.3:8080/books"
  books: BooksRequest;
  constructor(private http:HttpClient) { }

  getBooks():Observable<BooksRequest> {
    return this.http.get<BooksRequest>(this.bookListURL, httpOptions);
  }
}
