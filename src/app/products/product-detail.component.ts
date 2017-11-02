import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
  // selector is only required if we are going to nest this inside another component
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
