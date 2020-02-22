import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearCuentaComponent } from './crearCuenta.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [CrearCuentaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CrearCuentaComponent]
})
export class CrearCuentaModule { }
