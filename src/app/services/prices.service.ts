import { Injectable } from '@angular/core';
import { CategoryKey } from '../types/category-key.model';
import mockData from 'src/app/mocks/prices.mock.json'

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor() { }

  getPricesByCategory() {

    let categoryMap: CategoryKey[] = []
    this.getPrices().reduce(
      (previousValue, currentValue) => {
        let actual = previousValue.find(price => price.name === currentValue.category)

        if (actual) {
          actual.prices.push(currentValue)
        }
        else {
          previousValue.push({ name: currentValue.category, prices: [currentValue] })
        }

        return previousValue
      }, categoryMap
    )
    return categoryMap;
  }

  getPrices() {


    return mockData.prices
  }

}
