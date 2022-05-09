import { Component, OnInit } from '@angular/core';
import { Album } from 'src/album';
import { Artist } from 'src/artist';
import { Show } from 'src/show';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  albums?: Album[];
  artists?: Artist[];
  shows?: Show[];
/*
  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  }; */

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getAlbums();
    this.getArtists();
    this.getShows();
  }

  getAlbums(): void {
    this.spotifyService.getAlbums(10).subscribe( (json:any) => this.albums = json.albums.items );
  }

  getArtists(): void {
    this.spotifyService.getArtists(10).subscribe( (json:any) => this.artists = json.artists.items )
  }

  getShows(): void {
    this.spotifyService.getShows(10).subscribe( (json:any) => this.shows = json.shows.items );
  }
}
