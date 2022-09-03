import { Component, Input, OnInit } from '@angular/core';
import { CategoryKey } from 'src/app/types/category-key.model';

@Component({
  selector: 'app-price-container',
  templateUrl: './price-container.component.html',
  styleUrls: ['./price-container.component.scss']
})
export class PriceContainerComponent implements OnInit {

  @Input() category:CategoryKey;
  constructor() { }

  ngOnInit(): void {
  }

}
