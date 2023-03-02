import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./services/login.service";

@Injectable()
export class LoginGuardia implements CanActivate{


    constructor(private router:Router,private loginSvc : LoginService) {
       
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
/*         if(!this.loginSvc.isLogged())
            this.router.navigate(['']);

        return this.loginSvc.isLogged(); */

        //solo para pruebas
        return true;

    }

}