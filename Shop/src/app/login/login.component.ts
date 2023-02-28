import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { UserCredential } from './templates/UserCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  hide = true;

  public usrMinLength : number = 4;
  public pwsMinLength : number = 7;

  form: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(this.usrMinLength)]),
    password: new FormControl('',[Validators.required,Validators.minLength(this.pwsMinLength)])
  });

  constructor(private loginSvc : LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  login()
  {

    if (this.form.valid) {

      let uc = new UserCredential();
      uc.password = this.form.value.password;
      uc.userName = this.form.value.username;
      
      this.loginSvc.validateLogin(uc).subscribe((loginOk : boolean)=>{

        if(loginOk){

          this.router.navigate(['/home']);

        }

      });
    }
    else
      this.error = "Datos invalidos";

  }

  @Input() error!: string;

  get username() { return this.form.get('username'); }

  get password() { return this.form.get('password'); }
}


