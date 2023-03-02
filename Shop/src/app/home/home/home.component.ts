import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuPaths } from 'environment';
import { LoginService } from 'src/app/login/services/login.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router:Router,private loginSrv:LoginService){}

  menues = MenuPaths;

  logout():void{
      this.loginSrv.logout();
  }

  goToMenu(menu:string):void{
    this.router.navigate([menu]);
  }
}
