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

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.spotifyService.getAlbums(10).subscribe( (json:any) => this.albums = json.albums.items );
  }

}
