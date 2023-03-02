import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardia } from './login/loginGuardia';
import { PurchaseComponent } from './purchase/purchase/purchase.component';

const routes: Routes = [
  {path:'', component:LoginComponent },
  {path:'home', component:HomeComponent,canActivate: [LoginGuardia] },
  {path:'purchase', component:PurchaseComponent,canActivate: [LoginGuardia] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
