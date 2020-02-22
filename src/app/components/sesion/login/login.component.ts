import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'loginComponent',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email;
  contrasena;

  @Input() datos;


  constructor() { }

  ngOnInit() {
  }

  

}
