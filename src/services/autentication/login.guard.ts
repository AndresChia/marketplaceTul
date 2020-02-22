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
import { map } from "rxjs/operators";
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private storage: StorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.afAuth.authState.pipe(map(auth => {
      if (isNullOrUndefined(auth)) {
        if (state.url === "/login") {
          return true;
        }
        this.router.navigate(["/login"])
        return false;
      }

      if (state.url === "/login") {
        this.router.navigate(["home"])
      }

      return true;
    }))

  }
}
