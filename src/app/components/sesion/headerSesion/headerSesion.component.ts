import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'headerSesionComponent',
  templateUrl: './headerSesion.component.html',
  styleUrls: ['./headerSesion.component.scss']
})
export class HeaderSesionComponent implements OnInit {


  @Input() opcionActiva;


  @Output() cambioOpcion: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  cambiarOpcion(opcion) {
    this.cambioOpcion.emit(opcion);
  }

}
