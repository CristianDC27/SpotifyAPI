import { Component, OnInit } from '@angular/core';
import { Album } from 'src/album';
import { Artist } from 'src/artist';
import { Show } from 'src/show';
import { Track } from 'src/track';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  albums?: Album[];
  artists?: Artist[];
  shows?: Show[];
  tracks?: Track[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  onSearch(value: String): void {
    this.spotifyService.getSearch(10,value).subscribe( (json:any) => {
      this.albums = json.albums.items;
      this.artists = json.artists.items;
      this.shows = json.shows.items;
      this.tracks = json.tracks.items;
    });
  }
}
