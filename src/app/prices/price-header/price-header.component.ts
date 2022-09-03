import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-header',
  templateUrl: './price-header.component.html',
  styleUrls: ['./price-header.component.scss']
})
export class PriceHeaderComponent implements OnInit {

  @Input() name:string;
  constructor() { }

  ngOnInit(): void {
  }

}
