import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { homeRoutingModule } from "./home-routing.module";
import { HeaderAppModule } from '../shares/headerApp/headerApp.module';
import { SlideCarouselModule } from '../shares/slideCarousel/slideCarousel.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalMensajeModule } from '../shares/modal-mensaje/modal-mensaje.module';

@NgModule({
  exports: [HomeComponent],
  imports: [
    CommonModule,
    homeRoutingModule,
    HeaderAppModule,
    SlideCarouselModule,
    FormsModule,
    IonicModule,
    ModalMensajeModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
