import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/services/carrito/carrito.service';

@Component({
  selector: 'app-popInfo',
  templateUrl: './popInfo.component.html',
  styleUrls: ['./popInfo.component.scss']
})
export class PopInfoComponent implements OnInit {


  total = 0;
  compras = [];

  constructor(private _CarritoService: CarritoService) {
    this.compras = Array.from(this._CarritoService.getMapa())
    this.total = this._CarritoService.getPrecioAcumulado();
  }

  ngOnInit() {

  }

}
