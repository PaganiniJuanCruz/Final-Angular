import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription | undefined;

  error!:string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  loginForm = new FormGroup ({
    user: new FormControl ('', [Validators.required]),
    password: new FormControl ('', [Validators.required, Validators.minLength(4)])
  });

  userControl = this.loginForm.controls['user'];
  passwordControl = this.loginForm.controls['password'];

  submit(){
    if ( this.loginForm.valid){
      this.loginService.validateCredentials(this.loginForm.get('user')?.value, this.loginForm.get('password')?.value)
        .subscribe(valid => {
          if( valid ){
            this.router.navigate(['movies']);
          }else{
            this.error = 'Invalid User or Password';
            this.loginForm.reset;
          }
        })
    }
  }

  saveData(){
    console.log(this.loginForm.value);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
}

}
