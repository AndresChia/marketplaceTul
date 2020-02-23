import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';



@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(
    ) { }


    iniciarSesion = ({ email, contrasena }) => {
        return new Promise<any>(async (resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email,
                contrasena)
                .then(
                    res => resolve(res),
                    err => reject(err))
        })
    }


    crearCuenta = ({ email, contrasena }) => {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email,
                contrasena)
                .then(
                    res => resolve(res),
                    err => reject(err)
                )
        })
    }


    cerrarSesion() {
        return new Promise((resolve, reject) => {
            if (firebase.auth().currentUser) {
                firebase.auth().signOut()
                    .then(() => {
                        resolve();
                    }).catch((error) => {
                        reject();
                    });
            }
        })
    }

    recuperarClave(email){

        return new Promise<any>((resolve, reject) => {
            firebase.auth().sendPasswordResetEmail(email)
                .then(
                    res => resolve(res),
                    err => reject(err)
                )
        })

    }


}