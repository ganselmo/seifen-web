import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OffersComponent } from './pages/offers/offers.component';
import { PricesComponent } from './pages/prices/prices.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'prices', component: PricesComponent },
  { path: '**', redirectTo: 'prices' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
