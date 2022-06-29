import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auctionItem } from './Items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}
  getItems(): Observable<auctionItem[]> {
    return this.http.get<auctionItem[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }
}
