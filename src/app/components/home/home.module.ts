import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { homeRoutingModule } from "./home-routing.module";

@NgModule({
  exports: [HomeComponent],
  imports: [
    CommonModule,
    homeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
