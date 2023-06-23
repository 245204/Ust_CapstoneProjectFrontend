import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { loginsignup1 } from '../admin/model/loginsignup1';
import { SagauthService } from '../sagauth/sagauth.service';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginSignUp1: loginsignup1 = new loginsignup1();
  loginForm: FormGroup;
  submitMessage!: string;
  flag: boolean = false;
  usertype!: string;
  userid!: any;
  private isAuthenticated = false;

  constructor(
    //private routerService: RouterServiceService,
    private authservice: SagauthService,
    private route: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.isAuthenticated = !!localStorage.getItem('token');
    this.retrieveUserId();
  }

  login() {
    this.loginSignUp1.username = this.loginForm.value.username;
    this.loginSignUp1.password = this.loginForm.value.password;

    this.submitMessage = this.loginForm.value.username;

    this.authservice.loginUser(this.loginSignUp1).subscribe(
      (data) => {
        this.authservice.setBearerToken(data['token']);

        if (data != null) {
          localStorage.setItem('token', this.submitMessage);

          this.flag = true;

          this.authservice.fetchUser(this.loginSignUp1.username).subscribe(
            (response: any) => {
              if (response.token) {
                this.setAuthenticated(true);
              }
              this.userid = response.id;
              localStorage.setItem('userid', this.userid);

              this.usertype = response.type;
              if (this.usertype == 'user') {
                this.route.navigate(['/userhomepage']);
              } else if(this.usertype =='admin'){
                this.route.navigate(['/adminhomepage'])}
                else{ 
                alert('You are not authorized to login.');
              }
            },
            (error) => {
              console.log('error');
              alert('You have entered incorrect details.');
            }
          );
        }
      },
      (error) => {
        console.log('error');
        alert('You have entered incorrect username or password!');
      }
    );
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }

  setAuthenticated(status: boolean): void {
    this.isAuthenticated = status;
  }

  logout() {
    this.setAuthenticated(false);
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  retrieveUserId() {
    this.userid = sessionStorage.getItem('userid');
    console.log('Retrieved User ID:', this.userid);
  }
}