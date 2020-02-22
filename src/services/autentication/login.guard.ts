import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { StorageService } from '../storage/storage.service';



@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private storage: StorageService
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = await this.storage.get("USER");
    const local = window.localStorage.getItem("USER");
    if (user || local) {
      return true;
    }

    if (state.url === "/login") {
      return true;

    }

    this.router.navigate(['login']);
    return false;
  }
}
