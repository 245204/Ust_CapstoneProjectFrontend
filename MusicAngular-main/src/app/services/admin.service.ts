import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpClient, HttpClientModule} from'@angular/common/http';
import { Admin } from '../admin/model/Admin';
import { loginsignup1 } from '../admin/model/loginsignup1';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

//   baseurl='http://localhost:8083/api/1.0/admin/get';
//   baseurl1='http://localhost:8083/api/1.0/admin/delete';
 
//    constructor(private http: HttpClient) {
 
//     }
//  // ngOnInit(): void {
//  //   throw new Error('Method not implemented.');
//  // }
 
//    getMusics(){
//      return this.http.get<Admin[]>('http://localhost:8083/api/1.0/admin/allmusics');
//    }
   
//    getMusicById(id:number){
//      return this.http.get<Admin[]>(`${this.baseurl}/${id}`);
     
//    }
 
 
//    saveMusic(admin:Admin):
//     Observable<Object>{
//      return this.http.post( 'http://localhost:8083/api/1.0/admin/addmusic',admin);
//     }
 
 
//     updateMusic(admin:Admin):
//    Observable<Object>{
//       return this.http.put( 'http://localhost:8083/api/1.0/admin/update/',admin);
     
//     }
//     deleteMusicbyId(id:number):
//     Observable<Object>{
//       return this.http.delete(`${this.baseurl1}/${id}`);
//     }
  
// }


baseurl='http://localhost:8083/api/1.0/admin/get';
   baseurl1='http://localhost:8083/api/1.0/admin/delete';
  
    constructor(private http: HttpClient) {
  
     }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  
    getMusics(){
      return this.http.get<Admin[]>('http://localhost:8083/api/1.0/admin/allmusics');
    }
    
    getMusicById(id:number){
      return this.http.get<Admin[]>(`${this.baseurl}/${id}`);
      
    }
  
  
    saveMusic(admin:Admin):
     Observable<Object>{
      
     return this.http.post( 'http://localhost:8083/api/1.0/admin/addmusic',admin);
     }
  
  
     updateMusic(admin:Admin):
    Observable<Object>{
       return this.http.put( 'http://localhost:8083/api/1.0/admin/update',admin);
      
     }
     deleteMusicbyId(id:number):
     Observable<Object>{
       return this.http.delete(`${this.baseurl1}/${id}`);
    }
}
