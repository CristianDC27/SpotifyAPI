import { Component, OnInit } from '@angular/core';
import { Album } from 'src/album';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  albums?: Album[];

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  };

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.spotifyService.getAlbums(10).subscribe( (json:any) => this.albums = json.albums.items );
  }

}
