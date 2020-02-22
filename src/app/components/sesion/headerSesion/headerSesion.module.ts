import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSesionComponent } from './headerSesion.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  exports: [HeaderSesionComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  declarations: [HeaderSesionComponent]
})
export class HeaderSesionModule { }
