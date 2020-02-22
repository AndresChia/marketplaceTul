import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-mensaje',
  templateUrl: './modal-mensaje.component.html',
  styleUrls: ['./modal-mensaje.component.scss']
})
export class ModalMensajeComponent implements OnInit {


  @Input() mensaje;
  @Input() color;
  @Input() icono;
  @Input() conAcciones: boolean;

  @Output() cerrarPopUp: EventEmitter<string> = new EventEmitter();

  constructor() { }

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



}
