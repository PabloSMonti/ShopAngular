import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuPaths } from 'environment';
import { LoginService } from './login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router:Router,private loginSrv:LoginService){}

  menues = MenuPaths;
  title = 'Shop';

  logout():void{
    this.loginSrv.logout();
}

goToMenu(menu:string):void{
  this.router.navigate([menu]);
}
}
