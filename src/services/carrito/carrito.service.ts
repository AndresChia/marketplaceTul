import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {



  numeroDeProductos = 0;
  precioAcumulado = 0;

  mapaProducto = new Map();


  private carritoSubscribe: Subject<any> = new Subject();


  constructor() { }



  agregarProducto(producto, cantidad) {
    debugger

    this.numeroDeProductos += cantidad;
    this.precioAcumulado += (cantidad * producto.precio);
    this.mapaProducto.set(producto.nombre, { producto, cantidad })

    this.carritoSubscribe.next({ mapaProducto: this.mapaProducto, precioAcumulado: this.precioAcumulado, numeroDeProductos: this.numeroDeProductos });
  }

  quitarProducto(producto, cantidad) {
    this.numeroDeProductos -= cantidad;
    this.precioAcumulado -= (cantidad * producto.precio);
    let productoActual = this.mapaProducto.get(producto.nombre);
    productoActual.cantidad -= cantidad
    if (productoActual.cantidad <= 0) {
      this.mapaProducto.delete(producto.nombre);
    }

    this.carritoSubscribe.next({ mapaProducto: this.mapaProducto, precioAcumulado: this.precioAcumulado, numeroDeProductos: this.numeroDeProductos });
  }


  subscribe = (callback: (e: UIEvent) => void) => this.carritoSubscribe.subscribe(callback);


}
