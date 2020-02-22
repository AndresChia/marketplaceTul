import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/fireBase/auth.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {


  opcionActiva = "LogIn";

  datosLogIn = {
    email: "",
    contrasena: ""
  }

  constructor(public _AuthService: AuthService) { }

  ngOnInit() {
  }


  cambioOpcion(opcion) {
    this.opcionActiva = opcion;
  }

  registrarse() {
    debugger
  }



  iniciarSesion() {
    this._AuthService.iniciarSesion(this.datosLogIn).then((resolve) => {
      debugger
    }).catch((error) => {
      debugger
    })
  }

}
