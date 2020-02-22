import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearCuentaComponent } from './crearCuenta.component';

@NgModule({
  exports: [CrearCuentaComponent],
  imports: [
    CommonModule
  ],
  declarations: [CrearCuentaComponent]
})
export class CrearCuentaModule { }
