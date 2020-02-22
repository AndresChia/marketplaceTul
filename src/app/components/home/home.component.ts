import { Component, OnInit } from '@angular/core';
import { ApiProductosService } from 'src/services/apiProductos/apiProductos.service';
import { Categoria } from "./../../../model/Categoria";
import { AuthService } from 'src/services/fireBase/auth.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { CarritoService } from 'src/services/carrito/carrito.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaCategorias: Categoria[] = [];
  categoriaSelecionada = 0;
  mostrarModal = false;
  mensaje = "";

  constructor(public _ApiProductosService: ApiProductosService, public _AuthService: AuthService, private router: Router, private _CarritoService: CarritoService, public toastController: ToastController) {

    this.listaCategorias.push({
      nombre: "Frutas",
      imagen: "https://image.flaticon.com/icons/svg/706/706164.svg",
      lista: [
        { descripcion: "Manzanas lindas", nombre: "Manzana", precio: 2, unidadesDisponibles: 0, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" },
        { descripcion: "Peras lindas", nombre: "Pera", precio: 2, unidadesDisponibles: 20, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" },
        { descripcion: "Duraznos lindas", nombre: "Durazno", precio: 2, unidadesDisponibles: 10, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" },
        { descripcion: "Sandias lindas", nombre: "Sandia", precio: 2, unidadesDisponibles: 5, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" },
        { descripcion: "Mangos lindas", nombre: "Mango", precio: 2, unidadesDisponibles: 1, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" }
      ]
    });

    this.listaCategorias.push({
      nombre: "Celulares",
      imagen: "https://image.flaticon.com/icons/svg/706/706164.svg",
      lista: [
        { descripcion: "Iphone lindas", nombre: "Iphone X", precio: 2, unidadesDisponibles: 1, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" },
        { descripcion: "Samsung lindas", nombre: "Samsung s10", precio: 2, unidadesDisponibles: 1, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" },
        { descripcion: "Nokia lindas", nombre: "Nokia 1100", precio: 2, unidadesDisponibles: 1, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" }
      ]
    });


    this.listaCategorias.push({
      nombre: "Audifonos",
      imagen: "https://image.flaticon.com/icons/svg/706/706164.svg",
      lista: [
        { descripcion: "Manzanas lindas", nombre: "Manzana", precio: 2, unidadesDisponibles: 1, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" },
        { descripcion: "Peras lindas", nombre: "Pera", precio: 2, unidadesDisponibles: 1, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" },
        { descripcion: "Duraznos lindas", nombre: "Durazno", precio: 2, unidadesDisponibles: 1, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" },
        { descripcion: "Sandias lindas", nombre: "Sandia", precio: 2, unidadesDisponibles: 1, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" },
        { descripcion: "Mangos lindas", nombre: "Mango", precio: 2, unidadesDisponibles: 1, imagen: "https://image.flaticon.com/icons/svg/706/706164.svg" }
      ]
    });


    // _ApiProductosService.getCategorias().subscribe(categorias => {
    //   categorias.map(({ payload }) => {
    //     let imagen = payload.doc.data().imagen;
    //     let nombre = payload.doc.id;
    //     this.listaCategorias.push({ imagen, nombre })
    //   })
    //   debugger
    // },
    //   error => {
    //     debugger
    //   });
  }


  ngOnInit() {
  }

  cerrarSesion() {
    this._AuthService.cerrarSesion().then((resolve) => {
      this.router.navigate(['login']);
    })
  }


  selecionarCategoria(indexCategoria) {
    this.categoriaSelecionada = indexCategoria;
  }

  AgregarAlCarrito({ cantidad, valor }) {

    if (isNullOrUndefined(cantidad)) {
      this.mensaje = "Seleccione una cantidad valida del producto";
      this.mostrarModal = true;
      return;
    }

    if (valor.unidadesDisponibles < cantidad) {
      this.mensaje = "Selecciono una cantidad mayor a la disponible";
      this.mostrarModal = true;
      return;
    }

    this._CarritoService.agregarProducto(valor, Number(cantidad));

    this.presentToast("Productos agregado al carrito exitosamente.");

  }

  cerrarPopUp() {
    this.mostrarModal = false;
  }



  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
