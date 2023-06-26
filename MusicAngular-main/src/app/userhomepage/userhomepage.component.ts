import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { Admin } from '../admin/model/Admin';
import { FormGroup } from '@angular/forms';


interface Music {
  title: string;
  artist: string;
  album: string;
}

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit{
  filteredAdmin!: Admin[];

  constructor(private userService:UserService){}
  searchQuery: any;
  admin: Admin[] = [];
  myform!: FormGroup;
  // filteredUser: Admin[] = [];
  searchTerm: string = '';
  selectedMusic: Admin|null=null;
  showModal: boolean = false;

  ngOnInit(): void {
    this.getMusicAll();
  }
  getMusicAll() {
    this.userService.getAll().subscribe(data =>{
      this.admin=data;

    });
  }
  
  openModal(music: Admin) {
    console.log('Open modal called');
    this.selectedMusic = music;
    this.showModal = true;
  }
  closeModal() {
    this.selectedMusic = null;
    this.showModal = false;
  }
  musicDetails(music:Admin){
    this.myform.patchValue({
      musicName: music.musicName,
      artistName: music.artistName,
      musicId: music.musicId,
      songReleasDate:music.songReleaseDate,
      songLanguage:music.songLanguage,
      duration:music.duration,
      country:music.country,
      musicImage:music.musicImages,
      overallRate:music.overallRate
      
    });
    console.log(music.musicName);
  }

  rateSong(song: Music) {
    // Perform logic to rate the song
  }
  filter(): void {
    console.log("working function");
    if (this.searchTerm.trim() !== '') {
      this.filteredAdmin = this.admin.filter(item =>
        (item.musicName && item.musicName.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (item.artistName && item.artistName.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    } else {
      this.filteredAdmin = this.admin;
    }
  }
  
  

}
