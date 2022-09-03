import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesComponent } from './prices/prices.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { PricesModule } from '../prices/prices.module';



@NgModule({
  declarations: [
    PricesComponent,
    HomeComponent,
    OffersComponent
  ],
  imports: [
    CommonModule,
    PricesModule
  ]
})
export class PagesModule { }
