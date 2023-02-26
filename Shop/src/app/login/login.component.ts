import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  public usrMinLength : number = 5;
  public pwsMinLength : number = 8;
  form: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(this.usrMinLength)]),
    password: new FormControl('',[Validators.required,Validators.minLength(this.pwsMinLength)]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error!: string;

  @Output() submitEM = new EventEmitter();


  get username() { return this.form.get('username'); }

get password() { return this.form.get('password'); }
}


