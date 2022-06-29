import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { auctionItem } from '../Items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = new Map<auctionItem, number>();
  constructor(private cartService: CartService) {
    this.cartItems = cartService.cartItems;
  }

  ngOnInit(): void {}

  addItemToCart(item: auctionItem): void {
    this.cartService.addItemToCart(item);
  }
  removeItemFromCart(item: auctionItem): void {
    this.cartService.removeFromCart(item);
  }
}
