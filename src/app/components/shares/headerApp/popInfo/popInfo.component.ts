import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/services/carrito/carrito.service';

@Component({
  selector: 'app-popInfo',
  templateUrl: './popInfo.component.html',
  styleUrls: ['./popInfo.component.css']
})
export class PopInfoComponent implements OnInit {

  constructor(private _CarritoService: CarritoService) { }

  ngOnInit() {

  }

}
