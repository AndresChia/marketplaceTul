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
    this.numeroDeProductos += cantidad;
    this.precioAcumulado += (cantidad * producto.precio);

    if (this.mapaProducto.get(producto.nombre)) {
      let cantidadAnterior = this.mapaProducto.get(producto.nombre).cantidad;
      this.mapaProducto.set(producto.nombre, { producto, cantidad: cantidad + cantidadAnterior })
    } else {
      this.mapaProducto.set(producto.nombre, { producto, cantidad })
    }

    this.carritoSubscribe.next({ mapaProducto: this.mapaProducto, precioAcumulado: this.precioAcumulado, numeroDeProductos: this.numeroDeProductos });
  }

  quitarProducto(producto, cantidad) {
    this.numeroDeProductos -= cantidad;
    this.precioAcumulado -= (cantidad * producto.precio);
    if (this.mapaProducto.get(producto.nombre)) {
      let cantidadAnterior = this.mapaProducto.get(producto.nombre).cantidad;
      this.mapaProducto.set(producto.nombre, { producto, cantidad: cantidadAnterior - cantidad })
      if (cantidadAnterior - cantidad <= 0) {
        this.mapaProducto.delete(producto.nombre);
      }
    }
    this.carritoSubscribe.next({ mapaProducto: this.mapaProducto, precioAcumulado: this.precioAcumulado, numeroDeProductos: this.numeroDeProductos });
  }


  cambioDeCantidad(producto, cantidad) {
    let valorCantidadAnterior = producto[1].cantidad;
    let auxProducto = this.mapaProducto.get(producto[0]).producto;
    let valorRestar = valorCantidadAnterior - cantidad;
    
    if (valorCantidadAnterior > cantidad) {
      this.quitarProducto(auxProducto, Math.abs(valorRestar));
    } else {
      this.agregarProducto(auxProducto, Math.abs(valorRestar));
    }
  }

  getMapa() {
    return this.mapaProducto;
  }

  getNumeroDeProductos() {
    return this.numeroDeProductos;
  }

  getPrecioAcumulado() {
    return this.precioAcumulado;
  }

  subscribe = (callback: (e: UIEvent) => void) => this.carritoSubscribe.subscribe(callback);


}
