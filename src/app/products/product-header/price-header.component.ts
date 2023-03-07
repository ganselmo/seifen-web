import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-header',
  templateUrl: './price-header.component.html',
  styleUrls: ['./price-header.component.scss']
})
export class ProductHeaderComponent {

  @Input() name:string;


}
