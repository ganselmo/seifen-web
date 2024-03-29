import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product;
  constructor() { }

  ngOnInit(): void {
  }

}
