import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'loginComponent',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email;
  contrasena;
  mostrarModal=false;

  @Input() datos;


  constructor() { }

  ngOnInit() {
  }

  abrirPopUp(){
    this.mostrarModal=true;
  }

  cerrarPopUp(){
    this.mostrarModal=false;
  }

  

}
