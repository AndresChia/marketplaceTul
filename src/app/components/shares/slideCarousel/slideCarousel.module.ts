import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideCarouselComponent } from './slideCarousel.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  exports: [SlideCarouselComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [SlideCarouselComponent]
})
export class SlideCarouselModule { }
