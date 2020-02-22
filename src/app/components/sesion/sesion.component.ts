import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/fireBase/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage/storage.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  mostrarModal = false;
  mensajePopUp = "";
  opcionActiva = "LogIn";

  datosLogIn = {
    email: "",
    contrasena: ""
  }

  datosCrearCuenta = {
    email: "",
    contrasena: "",
    repcontrasena: ""
  }


  constructor(public _AuthService: AuthService,
    private router: Router,
    private storage: StorageService,
  ) {


    this.validarSesion();


  }

  async validarSesion() {
    const user = await this.storage.get("USER");
    const local= window.localStorage.getItem("USER");
    if(user || local){
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {
  }


  cambioOpcion(opcion) {
    this.opcionActiva = opcion;
  }

  registrarse() {
    if (this.datosCrearCuenta.email !== "" && this.datosCrearCuenta.contrasena !== "" && this.datosCrearCuenta.repcontrasena !== "" && this.datosCrearCuenta.contrasena == this.datosCrearCuenta.repcontrasena) {
      this._AuthService.crearCuenta(this.datosCrearCuenta).then((resolve) => {
        this.datosLogIn.email = this.datosCrearCuenta.email;
        this.datosLogIn.contrasena = this.datosCrearCuenta.contrasena;
        this.datosCrearCuenta = {
          email: "",
          contrasena: "",
          repcontrasena: ""
        }
        this.opcionActiva = 'LogIn';
      }).catch(({ code, message }) => {
        this.mostrarModal = true;
        if (code == "auth/invalid-email") {
          this.mensajePopUp = "Correo invalido"
        }
        if (code == "auth/weak-password") {
          this.mensajePopUp = "La clave debe ser mayor a los 6 caracteres"
        }
        if (code == "auth/email-already-in-use") {
          this.mensajePopUp = "La dirección de correo electrónico ya está siendo utilizada por otra cuenta"
        }
      });
    } else {
      this.mostrarModal = true;
      if (this.datosCrearCuenta.contrasena !== this.datosCrearCuenta.repcontrasena) {
        this.mensajePopUp = "Las contraseñas deben ser iguales";
      } else {
        this.mensajePopUp = "Complete los campos faltantes";
      }
    }
  }



  iniciarSesion() {
    if (this.datosLogIn.email !== "" && this.datosLogIn.contrasena !== "") {
      this._AuthService.iniciarSesion(this.datosLogIn).then(async (resolve) => {
        await sessionStorage.setItem('USER', JSON.stringify(this.datosLogIn));
        window.localStorage.setItem('USER', JSON.stringify(this.datosLogIn));
        this.router.navigate(['home']);
      }).catch(({ code, message }) => {
        this.mostrarModal = true;
        if (code == "auth/invalid-email") {
          this.mensajePopUp = "Correo invalido"
        }
        if (code == "auth/wrong-password") {
          this.mensajePopUp = "Contraseña incorrecta"
        }
      })
    } else {
      this.mostrarModal = true;
      this.mensajePopUp = "Complete los campos faltantes";
    }
  }



  cerrarPopUp() {
    this.mostrarModal = false;
  }
}
