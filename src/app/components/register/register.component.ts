import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;

  constructor(
    private userService: UserService)
    { }
    users: User[] = [];


  ngOnInit(): void {
    this.subscription = this.userService.getUser().subscribe(users => this.users = users);
    console.log();

  }


  userForm = new FormGroup ({
    name: new FormControl ('', [Validators.required, Validators.minLength(4)]),
    surname: new FormControl ('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required, Validators.minLength(4)])
  });

  nameControl = this.userForm.controls['name'];
  surnameControl = this.userForm.controls['surname'];
  emailControl = this.userForm.controls['email'];
  passwordControl = this.userForm.controls['password'];

  saveData(){
    console.log(this.userForm.value);
  }
  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
