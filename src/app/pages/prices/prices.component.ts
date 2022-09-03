import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/services/prices.service';
import { CategoryKey } from 'src/app/types/category-key.model';


@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  categories: CategoryKey[] = []

  constructor(private pricesService: PricesService) { }

  ngOnInit(): void {

    this.categories = this.pricesService.getPricesByCategory()



  }


}
