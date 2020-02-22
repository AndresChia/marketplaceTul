import { Component, OnInit } from '@angular/core';
import { ApiProductosService } from 'src/services/apiProductos/apiProductos.service';
import { map } from 'rxjs/operators';
import { Categoria } from "./../../../model/Categoria";
import { AuthService } from 'src/services/fireBase/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaCategorias: Categoria[] = [];

  constructor(public _ApiProductosService: ApiProductosService, public _AuthService: AuthService, private router: Router ) {

    this.listaCategorias.push({
      nombre: "Frutas",
      imagen: "https://image.flaticon.com/icons/svg/706/706164.svg",
      lista: [
        { descripcion: "Manzanas lindas", nombre: "Manzana", precio: 2, unidadesDisponibles: 1 },
        { descripcion: "Peras lindas", nombre: "Pera", precio: 2, unidadesDisponibles: 1 },
        { descripcion: "Duraznos lindas", nombre: "Durazno", precio: 2, unidadesDisponibles: 1 },
        { descripcion: "Sandias lindas", nombre: "Sandia", precio: 2, unidadesDisponibles: 1 },
        { descripcion: "Mangos lindas", nombre: "Mango", precio: 2, unidadesDisponibles: 1 }
      ]
    });

    this.listaCategorias.push({
      nombre: "Celulares",
      imagen: "https://image.flaticon.com/icons/svg/706/706164.svg",
      lista: [
        { descripcion: "Iphone lindas", nombre: "Iphone X", precio: 2, unidadesDisponibles: 1 },
        { descripcion: "Samsung lindas", nombre: "Samsung s10", precio: 2, unidadesDisponibles: 1 },
        { descripcion: "Nokia lindas", nombre: "Nokia 1100", precio: 2, unidadesDisponibles: 1 }
      ]
    });


    this.listaCategorias.push({
      nombre: "Audifonos",
      imagen: "https://image.flaticon.com/icons/svg/706/706164.svg",
      lista: [
        { descripcion: "Manzanas lindas", nombre: "Manzana", precio: 2, unidadesDisponibles: 1 },
        { descripcion: "Peras lindas", nombre: "Pera", precio: 2, unidadesDisponibles: 1 },
        { descripcion: "Duraznos lindas", nombre: "Durazno", precio: 2, unidadesDisponibles: 1 },
        { descripcion: "Sandias lindas", nombre: "Sandia", precio: 2, unidadesDisponibles: 1 },
        { descripcion: "Mangos lindas", nombre: "Mango", precio: 2, unidadesDisponibles: 1 }
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

}
