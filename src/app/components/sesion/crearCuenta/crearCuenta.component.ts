import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crearCuentaComponent',
  templateUrl: './crearCuenta.component.html',
  styleUrls: ['./crearCuenta.component.scss']
})
export class CrearCuentaComponent implements OnInit {


  email;
  contrasena;

  @Input() datos;


  constructor() { }

  ngOnInit() {
  }

}
