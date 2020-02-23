import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/services/carrito/carrito.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popInfo',
  templateUrl: './popInfo.component.html',
  styleUrls: ['./popInfo.component.scss']
})
export class PopInfoComponent implements OnInit {


  total = 0;
  compras = [];

  cantidades = [];

  subscriptions = new Subscription();


  constructor(private _CarritoService: CarritoService) {

    let sub = this._CarritoService.subscribe(this.cambioCarrito.bind(this));
    this.subscriptions.add(sub);


    this.compras = Array.from(this._CarritoService.getMapa())
    this.compras.forEach((element) => {
      this.cantidades.push(element[1].cantidad);
    });
    this.total = this._CarritoService.getPrecioAcumulado();
  }

  ngOnInit() {

  }

  cambioCantidad(index) {
    this.cantidades[index];
    this._CarritoService.cambioDeCantidad(this.compras[index], this.cantidades[index]);
  }


  cambioCarrito(evento) {
    debugger

    if (this.compras.length > 0) {
      this.compras = [];
      this.cantidades = [];
      this.compras = Array.from(this._CarritoService.getMapa())
      this.compras.forEach((element) => {
        this.cantidades.push(element[1].cantidad);
      });
      this.total = this._CarritoService.getPrecioAcumulado();

    }

  }
}
