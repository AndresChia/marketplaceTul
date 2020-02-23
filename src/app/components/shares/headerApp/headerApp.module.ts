import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAppComponent } from './headerApp.component';
import { IonicModule } from '@ionic/angular';
import { PopInfoComponent } from './popInfo/popInfo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [HeaderAppComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  declarations: [HeaderAppComponent,PopInfoComponent],
  entryComponents: [PopInfoComponent]
})
export class HeaderAppModule { }
