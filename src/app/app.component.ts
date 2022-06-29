import { Component } from '@angular/core';
import { auctionItem } from './Items';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'auction-site';
  constructor(private cartService: CartService) {}
  itemToBeAddedToCart(item: auctionItem) {
    this.cartService.addItemToCart(item);
  }
}
