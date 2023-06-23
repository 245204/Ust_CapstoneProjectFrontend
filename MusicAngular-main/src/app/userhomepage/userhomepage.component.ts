import { Component } from '@angular/core';
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
export class UserhomepageComponent {
  musicList: Music[] = [
    { title: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { title: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
    { title: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
    { title: 'Song 4', artist: 'Artist 4', album: 'Album 4' },
    { title: 'Song 5', artist: 'Artist 5', album: 'Album 5' }
  ];
  searchQuery: string = '';
  filteredMusicData:any[]|undefined;
  
  
  search() {
  //   if(this.searchQuery){
  //     this.filteredMusicData=this.
    }
  

  viewSong(song: Music) {
    // Perform logic to view the song details
  }

  rateSong(song: Music) {
    // Perform logic to rate the song
  }

}
