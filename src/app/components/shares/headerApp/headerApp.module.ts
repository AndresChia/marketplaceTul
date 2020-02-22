import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAppComponent } from './headerApp.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  exports: [HeaderAppComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [HeaderAppComponent]
})
export class HeaderAppModule { }
