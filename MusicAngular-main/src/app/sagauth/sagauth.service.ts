import { Injectable } from '@angular/core';
import { loginsignup1 } from '../admin/model/loginsignup1';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SagauthService {
  private authenticated: boolean = false;
  private tokenStr!: string;

  registerUser(loginSignUp1:loginsignup1): Observable<loginsignup1> {
    return this.httpClient.post<loginsignup1>('http://localhost:8088/api/user/register', loginSignUp1);
  }

  constructor(private httpClient: HttpClient,private route:Router) {}

 

  loginUser(loginSignUp1:loginsignup1) {
    console.log("GET USER");
    console.log(loginSignUp1.username);
    console.log(loginSignUp1.password);
    this.authenticated = true;
    return this.httpClient.post<any>(`http://localhost:8088/api/users/login`, loginSignUp1, { headers: new HttpHeaders().set('responseType', 'text') }).pipe(
      map(
        userData => {
          localStorage.setItem('username', loginSignUp1.username);
          this.tokenStr = userData.token;
          console.log("Token string: " + this.tokenStr);
          localStorage.setItem('token', this.tokenStr);
          return userData;
        }
      )
    );
  }

  fetchUser(username:string){
    return this.httpClient.get<any>(`http://localhost:8088/api/user/details/${username}`);
  }


  isAuthenticated():boolean{
    return this.authenticated;
  }

  setAuthenticated(status: boolean): void {
    this.authenticated = status;
  }

  logout() {
    this.authenticated = false;
    //this.tokenStr = '';
    //localStorage.removeItem('tokenStr');
    localStorage.removeItem('token');
    this.route.navigate(['/user']);
  }

  setBearerToken(token: string) {
    localStorage.setItem('token', token);
  }
}