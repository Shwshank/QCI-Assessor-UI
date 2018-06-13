import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()


///////////////////////////////////////////////////////////////////////////////////d1
//
//    AuthGuard checks the urls throughout the Application
//
//    ///////////////////////////////////////////////////////////////////////////////
//    //
//    //    # Functions
//    //    1. canActivate() : If finds token in the localStorage, acticate the url.
//    //
//    ///////////////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////////////////////


export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {

      if (localStorage.getItem('token')) {
            return true;
      }

      this.router.navigate(['/login']);
      return false;
    }
}
