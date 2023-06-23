import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from '../model/Admin';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent {
 
  constructor(private service:AdminService,private router:Router){

  }

  admin:Admin[]=[];

   ngOnInit():void{
    this.admin=this.getMusics();
   } 
  //  gotoProductList() {
  //   this.router.navigate(['retrieve']);
  // }
    deleteMusic(id:number): void {
     this.service.deleteMusicbyId(id).subscribe(
      (data) => {
       this.admin=this.admin.filter(item=>item.musicId!==id);
        // this.gotoProductList();
       },
       (error) => {
         console.log('Error deleting music:', error);
       }
     )}


   getMusics():any{
    this.service.getMusics().subscribe((admin)=>{
    this.admin=admin;
   });

  }
}


