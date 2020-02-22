import { Component, OnInit, Input, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'slideCarouselComponent',
  templateUrl: './slideCarousel.component.html',
  styleUrls: ['./slideCarousel.component.scss']
})
export class SlideCarouselComponent implements OnInit {

  @ViewChild(IonSlides, { static: true }) slides: IonSlides;


  unidades = [];

  @Input() listaValores;

  @Output() AgregarAlCarrito = new EventEmitter<any>();

  // indexList=[0];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    this.slides.slideTo(0, 500);
    this.unidades = [];


  }

  // getSelecionadoActual(index){
  //   return this.indexList.find(element=>element==index);
  // }

  // agregarIndex(index){
  //   let aux=this.indexList.findIndex(element=>element==index);
  //   if(aux!==-1){
  //     this.indexList.splice(aux,1);
  //   }else{
  //     this.indexList.push(index);
  //   }
  // }


  agregarAlcarrito(index) {
    this.AgregarAlCarrito.emit({ cantidad: this.unidades[index], valor: this.listaValores.lista[index] })
    this.unidades = [];
  }
}
