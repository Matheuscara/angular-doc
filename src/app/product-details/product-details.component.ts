import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {

  }

  ngOnInit(): void {
    const routeParameters = this.route.snapshot.paramMap;
    const idItems = Number(routeParameters.get('productId'));

    this.product = products.find(product => product.id === idItems);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

}
