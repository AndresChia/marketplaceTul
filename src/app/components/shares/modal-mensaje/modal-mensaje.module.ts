import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalMensajeComponent } from './modal-mensaje.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  exports: [ModalMensajeComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ModalMensajeComponent]
})
export class ModalMensajeModule { }
