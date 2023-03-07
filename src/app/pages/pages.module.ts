import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesComponent } from './prices/prices.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { ProductModule } from '../products/products.module';



@NgModule({
  declarations: [
    PricesComponent,
    HomeComponent,
    OffersComponent
  ],
  imports: [
    CommonModule,
    ProductModule
  ]
})
export class PagesModule { }
