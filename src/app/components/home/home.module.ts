import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { homeRoutingModule } from "./home-routing.module";
import { HeaderAppModule } from '../shares/headerApp/headerApp.module';
import { SlideCarouselModule } from '../shares/slideCarousel/slideCarousel.module';

@NgModule({
  exports: [HomeComponent],
  imports: [
    CommonModule,
    homeRoutingModule,
    HeaderAppModule,
    SlideCarouselModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
