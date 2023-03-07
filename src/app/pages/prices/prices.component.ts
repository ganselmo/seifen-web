import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CategoryKey } from 'src/app/types/category-key.model';


@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  categories: CategoryKey[]

  constructor(private productsService: ProductsService) { }

  async ngOnInit(): Promise<void> {
  this.categories = await this.productsService.getProductsFromDB();
  }


}
