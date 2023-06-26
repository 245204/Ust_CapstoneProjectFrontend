import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from '../model/Admin';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
// export class RetrieveComponent {
 
 
//   constructor(private service:AdminService,private router:Router){

//   }

//   admin:Admin[]=[];

//    ngOnInit():void{
//     this.admin=this.getMusics();
//    } 
//   //  gotoProductList() {
//   //   this.router.navigate(['retrieve']);
//   // }
//     deleteMusic(id:number): void {
//      this.service.deleteMusicbyId(id).subscribe(
//       (data) => {
//        this.admin=this.admin.filter(item=>item.musicId!==id);
//         // this.gotoProductList();
//        },
//        (error) => {
//          console.log('Error deleting music:', error);
//        }
//      )}


//    getMusics():any{
//     this.service.getMusics().subscribe((admin)=>{
//     this.admin=admin;
//    });

//   }

  
// }

export class RetrieveComponent {
  admin: Admin[] = [];
  filteredAdmin: Admin[] = [];
  searchTerm: string = '';

  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.getMusics();
  }

  deleteMusic(id: number): void {
    this.service.deleteMusicbyId(id).subscribe(
      (data) => {
        this.admin = this.admin.filter(item => item.musicId !== id);
        this.filteredAdmin = this.filteredAdmin.filter(item => item.musicId !== id);
      },
      (error) => {
        console.log('Error deleting music:', error);
      }
    );
  }

  getMusics(): void {
    this.service.getMusics().subscribe((admin) => {
      this.admin = admin;
       this.filteredAdmin = admin;
    });
  }

  
  filterAdmin(): void {
    if (this.searchTerm.trim() !== '') {
      this.filteredAdmin = this.admin.filter(item =>
        (item.musicName?.toLowerCase()?.includes(this.searchTerm.toLowerCase()) || false) ||
        (item.artistName?.toLowerCase()?.includes(this.searchTerm.toLowerCase()) || false)
      );
    } else {
      this.filteredAdmin = this.admin;
    }
  }
}


