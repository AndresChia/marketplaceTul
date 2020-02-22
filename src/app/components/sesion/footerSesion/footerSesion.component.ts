import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'footerSesionComponent',
  templateUrl: './footerSesion.component.html',
  styleUrls: ['./footerSesion.component.scss']
})
export class FooterSesionComponent implements OnInit {

  @Input() opcionActiva;

  @Output() iniciarSesionButton: EventEmitter<string> = new EventEmitter();
  @Output() registrarseButton: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
