import { Component, Input } from '@angular/core';
import { CategoryKey } from 'src/app/types/category-key.model';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent {

  @Input() category:CategoryKey;


}
