import { Injectable } from '@angular/core';
import { CategoriesWithProducts } from '../types/categories-with-products.type';
import { db } from '../types/db';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  async getProductsFromDB(): Promise<CategoriesWithProducts[]> {
    const { data, error } = await db
      .categories()
      .select(`name,
      products(name,price)`).eq('products.available', true).returns<CategoriesWithProducts[]>()
    if (error) {
      throw error
    }
    return data
  }






}
