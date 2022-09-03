import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceContainerComponent } from './price-container/price-container.component';
import { PriceItemComponent } from './price-item/price-item.component';
import { PriceHeaderComponent } from './price-header/price-header.component';
import { PriceConditionsComponent } from './price-conditions/price-conditions.component';



@NgModule({
  declarations: [
    PriceContainerComponent,
    PriceItemComponent,
    PriceHeaderComponent,
    PriceConditionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PriceContainerComponent,
    PriceConditionsComponent
  ]
})
export class PricesModule { }
