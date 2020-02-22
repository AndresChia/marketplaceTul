import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SesionComponent } from './sesion.component';
import { sesionRoutingModule } from './sesion-routing.module';

import { LoginModule } from './login/login.module';
import { HeaderSesionModule } from './headerSesion/headerSesion.module';
import { FooterSesionModule } from './footerSesion/footerSesion.module';
import { CrearCuentaModule } from './crearCuenta/crearCuenta.module';

@NgModule({
  imports: [
    CommonModule,
    sesionRoutingModule,
    LoginModule,
    HeaderSesionModule,
    FooterSesionModule,
    CrearCuentaModule
  ],
  declarations: [SesionComponent]
})
export class SesionModule { }
