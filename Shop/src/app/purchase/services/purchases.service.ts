import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPaths, environment } from 'environment';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';
import { IPurchase } from '../templates/IPurcharse';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(private http:HttpClient,private loginSvc:LoginService) { }


  getPurchases(top:number,skip:number):Observable<IPurchase[]>{

    let token = this.loginSvc.getTokenValue();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    let requestOptions = { headers: headers };

    return this.http.get<IPurchase[]>(environment.baseUrl+ApiPaths.getPurchases,requestOptions);
  }
}
