import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { ApiPaths, environment } from 'environment';
import { UserCredential } from '../templates/UserCredentials';
import { CookieService } from 'ngx-cookie-service';
import { ITokenResponse } from '../templates/ITokenResponse';
import { TokenResponse } from '../templates/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient, private cookieSvc:CookieService) { }

  validateLogin(credentials:UserCredential):Observable<boolean> {

    let token  = new TokenResponse();

    this.http.post<ITokenResponse>(environment.baseUrl+ApiPaths.getToken,credentials)
    .subscribe((res: ITokenResponse) => {
      
      token = res;
      
      if(token.statusCode != undefined && token.statusCode ==  HttpStatusCode.Ok){

        //this.cookieSvc.set("token",token);
        console.log("siii");
        return true;
      }
      else
        return false;
    
    });

    return of(false);

  }
}


//https://codingpotions.com/angular-login-sesion