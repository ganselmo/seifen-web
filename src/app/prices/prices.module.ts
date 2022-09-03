import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceContainerComponent } from './price-container/price-container.component';
import { PriceItemComponent } from './price-item/price-item.component';
import { PriceHeaderComponent } from './price-header/price-header.component';



@NgModule({
  declarations: [
    PriceContainerComponent,
    PriceItemComponent,
    PriceHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PriceContainerComponent
  ]
})
export class PricesModule { }
