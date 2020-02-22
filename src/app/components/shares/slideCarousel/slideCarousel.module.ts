import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideCarouselComponent } from './slideCarousel.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [SlideCarouselComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  declarations: [SlideCarouselComponent]
})
export class SlideCarouselModule { }
