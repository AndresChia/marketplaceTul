import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {
  database: any;
  fireUser: firebase.User;


  private categoriasCollection: AngularFirestoreCollection<any>;
  private categoria: Observable<any[]>;



  constructor(public db: AngularFirestore) {

    // this.database = firebase.database();
    // this.fireUser = JSON.parse(localStorage.getItem('fireUser'));
  }



  getCategorias() {
    return this.categoria = this.db.collection<any>('Categorias').snapshotChanges();
  }

}


