import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductContainerComponent } from './product-container/product-container.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductHeaderComponent } from './product-header/price-header.component';
import { ProductConditionsComponent } from './product-conditions/product-conditions.component';



@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductItemComponent,
    ProductHeaderComponent,
    ProductConditionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductContainerComponent,
    ProductConditionsComponent
  ]
})
export class ProductModule { }
