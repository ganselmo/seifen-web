import { Categories, Products } from "./definitions";

export type CategoriesWithProducts = {
  name: Categories["name"],
  products: Products[];
}
