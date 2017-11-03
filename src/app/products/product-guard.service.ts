// To create a new service module use the following angular cli command in the terminal
// If the angular cli is not installed, then we have to install that first
// npm install -g @angular/cli
// Now create the files using the following syntax
// ng g service product/product-guard -m app.module
// app.module is the app module name where we want to register this service

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate  {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // First element in 0th index is products
    // Index 1 is product id
    let id = +route.url[1].path;
    if(isNaN(id) || id < 1){
      // We usually route to an error page to show the problem
      alert('Invalid product Id');
      this._router.navigate([('/products')]);
      return false;
    }
    return true;
  }

}
