import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopInfoComponent } from "./popInfo/popInfo.component";
import { CarritoService } from 'src/services/carrito/carrito.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'headerAppComponent',
  templateUrl: './headerApp.component.html',
  styleUrls: ['./headerApp.component.scss']
})
export class HeaderAppComponent implements OnInit {

  subscriptions = new Subscription();
  numeroCompras = 0;
  @Output() cerrarSesion = new EventEmitter<any>();


  constructor(private menu: MenuController, public popoverCtrl: PopoverController, private _CarritoService: CarritoService) {



    let sub3 = this._CarritoService.subscribe(this.carritoService.bind(this));
    this.subscriptions.add(sub3);

  }

  ngOnInit() {
  }

  abrirMenu() {
    this.menu.open('first');
  }

  async abrirCarrito(eventoClick) {
    let popover = await this.popoverCtrl.create({ component: PopInfoComponent, event: eventoClick });
    await popover.present();
  }


  carritoService(evento) {
    this.numeroCompras = evento.numeroDeProductos;
  }

}



