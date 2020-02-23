import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/services/fireBase/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modalRecuperarPassword',
  templateUrl: './modalRecuperarPassword.component.html',
  styleUrls: ['./modalRecuperarPassword.component.scss']
})
export class ModalRecuperarPasswordComponent implements OnInit {


  @Output() cerrarPopUp = new EventEmitter<any>();

  email;

  constructor(private _AuthService: AuthService, public toastController: ToastController) { }

  ngOnInit() {
  }


  getStyles(elementoPopUp: HTMLElement) {
    let coordenadas = elementoPopUp.getBoundingClientRect();
    let altura = coordenadas.height;
    let ancho = coordenadas.width;
    return { 'top': '50%', 'left': '50%', 'margin': (-altura / 2) + "px" + ' 0 0 ' + (-ancho / 2) + "px", 'transform': 'none' }
  }

  accionBotonCerrar() {
    this.cerrarPopUp.emit();
  }

  accionBotonEnviar() {
    this._AuthService.recuperarClave(this.email).then((resolve) => {
      this.presentToast("Recuperacion exitosa revise su correo")
      this.cerrarPopUp.emit();
    }).catch(({ code, message }) => {
      if (code == "auth/user-not-found") {
        this.presentToast("No hay ningún registro de usuario que corresponda a este identificador")
      }
    })
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
