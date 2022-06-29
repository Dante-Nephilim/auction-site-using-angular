import { Injectable } from '@angular/core';
import { auctionItem } from './Items';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = new Map<auctionItem, number>();
  constructor() {}
  addItemToCart(item: auctionItem) {
    let quantity;
    if (this.cartItems.has(item)) {
      quantity = this.cartItems.get(item);
      if (typeof quantity == 'number') {
        this.cartItems.set(item, quantity + 1);
      }
    } else {
      this.cartItems.set(item, 1);
    }
  }
  removeFromCart(item: auctionItem) {
    let quantity = this.cartItems.get(item);
    if (typeof quantity == 'number') {
      if (quantity !== 1) {
        this.cartItems.set(item, quantity - 1);
      } else {
        this.cartItems.delete(item);
      }
    }
  }
}
