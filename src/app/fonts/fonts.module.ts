import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {
  faFacebookSquare,
  faWhatsappSquare,
  faInstagramSquare
} from '@fortawesome/free-brands-svg-icons';
import {  faMapPin } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FontsModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebookSquare,
      faWhatsappSquare,
      faInstagramSquare,
      faMapPin
    );
  }
}
