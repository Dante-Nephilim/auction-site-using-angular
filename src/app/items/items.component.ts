import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auctionItem } from '../Items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  responseFromApi: any;
  auctionItemsArray: auctionItem[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((Response) => {
        // console.log(Response);
        this.responseFromApi = Response;
        // console.log(this.responseFromApi);
        this.auctionItemsArray = this.responseFromApi;
        // console.log(this.responseFromApi);
        console.log(this.auctionItemsArray);
      });
  }
}
