import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'headerAppComponent',
  templateUrl: './headerApp.component.html',
  styleUrls: ['./headerApp.component.scss']
})
export class HeaderAppComponent implements OnInit {


  @Output() cerrarSesion = new EventEmitter<any>();


  constructor(private menu: MenuController) {


  }

  ngOnInit() {
  }

  abrirMenu(){
    this.menu.open('first');
  }

}



