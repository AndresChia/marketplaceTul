import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'slideCarouselComponent',
  templateUrl: './slideCarousel.component.html',
  styleUrls: ['./slideCarousel.component.scss']
})
export class SlideCarouselComponent implements OnInit {

  @Input() listaValores;


  indexList=[0];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

  getSelecionadoActual(index){
    return this.indexList.find(element=>element==index);
  }

  agregarIndex(index){
    let aux=this.indexList.findIndex(element=>element==index);
    if(aux!==-1){
      this.indexList.splice(aux,1);
    }else{
      this.indexList.push(index);
    }
  }

}
