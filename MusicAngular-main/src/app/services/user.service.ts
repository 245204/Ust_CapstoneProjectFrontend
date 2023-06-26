import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../admin/model/Admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  baseUrl1='http://localhost:9093/api/1.0/users/search/name';
  baseUrl2='http://localhost:9093/api/1.0/users/search/artist';
  baseUrl3='http://localhost:9093/api/1.0/users/search/genre';
  
  getAll(){
    return this.http.get<Admin[]>('http://localhost:9093/api/1.0/users/allmusics');
  }
  getMusicByName(name:String){
    return this.http.get<Admin[]>(`${this.baseUrl1}/${name}`);
  }

  getMusicByArtist(artist:String){
    return this.http.get<Admin[]>(`${this.baseUrl2}/${artist}`);
  }
  getMusicByGenre(genre:String){
    return this.http.get<Admin[]>(`${this.baseUrl3}/${genre}`);
  }
}
