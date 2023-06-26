import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from '../model/Admin';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {

  admin:Admin=new Admin();
  constructor(private http:HttpClient,private adminService:AdminService,private route:Router){
  }

  ngOnInit():void{

  }

  // saveMusic() {
   
  //   this.adminService.saveMusic(this.admin).subscribe(data=>
  //     {
  //       console.log();
        
  //       this.gotoMusicList();
  //     },
  //     error=>console.log(error));
  // }   
  saveMusic() {
   
    this.adminService.saveMusic(this.admin).subscribe(data=>
      {
        this.gotoMusicList();
      },
      error=>console.log(error));
  } 


  gotoMusicList() {
    this.route.navigate(['/retrieve']);
  }
}
