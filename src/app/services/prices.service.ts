import { Injectable } from '@angular/core';
import { CategoryKey } from '../types/category-key.model';
import { Price } from '../types/price.model';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor() { }

  getPricesByCategory(){

    let categoryMap:CategoryKey[]= []

    this.getPrices().reduce(
      (previousValue, currentValue) => {
        let actual = previousValue.find(price=>price.name === currentValue.category)

        if(actual){
          actual.prices.push(currentValue)
        }
        else{
          previousValue.push({name:currentValue.category,prices:[currentValue]})
        }

        return previousValue
      },categoryMap
    )
    return categoryMap;
  }

  getPrices(): Price[] {
    return [
      {
        category: "Jabón de ropa",
        name: "Azul Fresh",
        amount: 150
      },
      {
        category: "Jabón de ropa",
        name: "Verde Manzana",
        amount: 150
      },
      {
        category: "Suavizante",
        name: "Blanco Nieve",
        amount: 150
      },
      {
        category: "Perfuminas",
        name: "Coco",
        amount: 300
      },
      {
        category: "Perfuminas",
        name: "Confort",
        amount: 300
      },
      {
        category: "Perfuminas",
        name: "Bamboo",
        amount: 300
      },
      {
        category: "Perfuminas",
        name: "Vivere",
        amount: 300
      },
      {
        category: "Perfuminas",
        name: "Algodón",
        amount: 300
      },
      {
        category: "Perfuminas",
        name: "Martina",
        amount: 300
      },
      {
        category: "Perfuminas",
        name: "Flores silvestres",
        amount: 300
      },
      {
        category: "Perfuminas",
        name: "Coniglio",
        amount: 300
      },
      {
        category: "Detergente",
        name: "Limón",
        amount: 140
      },
      {
        category: "Jabón de Manos",
        name: "Dove",
        amount: 160
      },
      {
        category: "Jabón de Manos",
        name: "H&S",
        amount: 160
      },
      {
        category: "Alcohol",
        name: "Líquido",
        amount: 350
      },
      {
        category: "Alcohol",
        name: "Gel",
        amount: 350

      },
      {
        category: "Piso",
        name: "Floral",
        amount: 40
      },
      {
        category: "Piso",
        name: "Arpege",
        amount: 40
      },
      {
        category: "Piso",
        name: "Lavanda",
        amount: 40
      },
      {
        category: "Piso",
        name: "Marina",
        amount: 40
      },
      {
        category: "Piso",
        name: "Pino",
        amount: 40
      },
      {
        category: "Piso",
        name: "Papaya",
        amount: 40
      },
      {
        category: "Piso",
        name: "Citronella",
        amount: 40
      },
      {
        category: "Piso",
        name: "Limón verde",
        amount: 40
      },
      {
        category: "Piso",
        name: "Cherry",
        amount: 40
      },
      {
        category: "Piso",
        name: "Lyso",
        amount: 55
      },
      {
        category: "Piso",
        name: "Proce",
        amount: 60
      },
      {
        category: "Lavandina",
        name: "Lavandina Líquida",
        amount: 60
      },
      {
        category: "Lavandina",
        name: "Lavandina Ropa Blanca",
        amount: 150
      },
      {
        category: "Pileta",
        name: "Cloro Líquido 100%",
        amount: 90
      },
      {
        category: "Pileta",
        name: "Cloro Pastilla 50gr",
        amount: 120
      },
      {
        category: "Pileta",
        name: "Cloro pastilla 200gr",
        amount: 400
      }

    ]
  }

}
