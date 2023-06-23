import { Component } from '@angular/core';
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
  // onSubmit(){
  //   this.saveMusic();
  //   console.log(this.admin);
  // }

  saveMusic() {
   
    this.adminService.saveMusic(this.admin).subscribe(data=>
      {
        console.log();
        
        this.gotoMusicList();
      },
      error=>console.log(error));
  }   
  gotoMusicList() {
    this.route.navigate(['/retrieve']);
  }
  onChangeFile(event:any){
    debugger
    if(event.files.length>0){
      const file=event.target.files[0];
      if(file.type =='image/png'||file.type =='image/jpeg'){ 
      const formData=new FormData();
      formData.append('file',file);
      this.http.post('',formData).subscribe((res:any)=>{
        debugger
      });
    }else{
      alert('please select only jpeg and png');
    }
  }
    
  }
    


}

