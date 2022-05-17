import { Component, OnInit } from '@angular/core';
import { Album } from 'src/album';
import { Artist } from 'src/artist';
import { Event } from 'src/event';
import { Show } from 'src/show';
import { ScrapService } from '../scrap.service';
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
  events?: Event[];

  constructor(
    private spotifyService: SpotifyService,
    private scrapService: ScrapService
  ) { }

  ngOnInit(): void {
    this.getAlbums();
    this.getArtists();
    this.getShows();
    this.getEvents();
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

  getEvents(): void {
    this.scrapService.getEvents().subscribe( events => this.events = events );
  }
}
