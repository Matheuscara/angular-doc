import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itens: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product): void {
    this.itens.push(product);
  }

  getItems(): Product[] {
    return this.itens;
  }

  clearItems(): Product[] {
    this.itens = [];
    return this.itens
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}
