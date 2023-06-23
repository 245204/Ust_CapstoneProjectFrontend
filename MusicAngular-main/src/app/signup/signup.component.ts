import { loginsignup1} from './../admin/model/loginsignup1';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../authservices/login.service';
import { SagauthService } from '../sagauth/sagauth.service';
// import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  loginSignUp1: loginsignup1 = new loginsignup1();

  constructor(private authservice:SagauthService, private router: Router) {}

  signup() {
    this.registerUser();
    console.log(this.loginSignUp1);
  }

  registerUser() {
    this.authservice.registerUser(this.loginSignUp1).subscribe(
      (data) => {
        console.log(this.loginSignUp1);
        this.gotoLoginPage();
      },
      (error) => console.log(error)
    );
  }

  gotoLoginPage() {
    this.router.navigate(['/login']);
  }
}
