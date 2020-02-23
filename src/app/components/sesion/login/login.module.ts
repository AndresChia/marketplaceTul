import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalRecuperarPasswordComponent } from './modalRecuperarPassword/modalRecuperarPassword.component';
import { CommonModule } from '@angular/common';  

@NgModule({
  exports: [LoginComponent],
  imports: [
    MatGridListModule,
    FormsModule,
    CommonModule,
    IonicModule
  ],
  declarations: [LoginComponent,ModalRecuperarPasswordComponent],
  entryComponents: [ModalRecuperarPasswordComponent]

})
export class LoginModule { }
