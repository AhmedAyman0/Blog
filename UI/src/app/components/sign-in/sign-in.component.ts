import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  message: string =null;
  constructor(private formBuilder: FormBuilder, private router: Router,private loginserv: AuthService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id:["",[Validators.required]],
      password:['',[Validators.required]]

  });
}
  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    let user = new  User(this.loginForm.value.id,this.loginForm.value.password)
    console.log(user);
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.router.navigateByUrl('/');
    
    this.loginserv.login(user);

    console.log(user);

  }

  }