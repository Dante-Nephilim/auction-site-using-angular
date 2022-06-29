import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { auctionItem } from '../Items';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  responseFromApi: any;
  auctionItemsArray: auctionItem[] = [];
  constructor(private itemService: ItemsService) {}
  @Output() itemToCart = new EventEmitter<auctionItem>();
  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => {
      this.auctionItemsArray = items;
    });
    console.log(this.auctionItemsArray);
  }
  addItemToCart(item: auctionItem): void {
    this.itemToCart.emit(item);
  }
}
