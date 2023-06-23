import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginsignup1 } from '../admin/model/loginsignup1';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    
   }
  registerUser(loginSignUp1: loginsignup1): Observable<loginsignup1> {
    return this.http.post<loginsignup1>('http://localhost:8088/api/user/register',loginSignUp1);
  }
  

    loginUser(loginSignUp1:loginsignup1):
   Observable<Object>{
      return this.http.post( 'http://localhost:8088/api/users/login',loginSignUp1);
     
    }
    baseurl2='http://localhost:8088/api/user/details';

    fetchUser(username:string):
    Observable<Object>{
       return this.http.get<loginsignup1[]>( `${this.baseurl2}/${username}`);
      
     }
}
