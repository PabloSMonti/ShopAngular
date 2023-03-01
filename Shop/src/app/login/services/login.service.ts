import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import { ApiPaths, environment } from 'environment';
import { UserCredential } from '../templates/UserCredentials';
import { CookieService } from 'ngx-cookie-service';
import { ITokenResponse } from '../templates/ITokenResponse';
import { TokenResponse } from '../templates/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private cookieSvc:CookieService) { 

    this.cookieSvc.delete('token');
  }

  validateLogin(credentials:UserCredential):Observable<ITokenResponse> {

    let token  = new TokenResponse();

    let post = this.http.post<ITokenResponse>(environment.baseUrl+ApiPaths.getToken,credentials);

    post
    .subscribe((res: ITokenResponse) => {
      
      token = res;
      
      if(token.statusCode != undefined && token.statusCode ==  HttpStatusCode.Ok){

        this.cookieSvc.set("token",token.token);
      }
    
    });

    return post;

  }

  isLogged():boolean{
    return this.cookieSvc.check("token");
  }
}


//https://codingpotions.com/angular-login-sesion