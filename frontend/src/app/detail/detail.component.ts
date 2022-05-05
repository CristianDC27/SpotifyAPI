import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/episodes';
import { Track } from 'src/track';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  type?: String;
  img?: String;
  name?: String;
  tracks?: Track[];
  episodes?: Episode[];

  location?: String;

  constructor( private route: ActivatedRoute, private spotify: SpotifyService ) { }

  ngOnInit(): void {
    this.route.url.subscribe( (object: any) => {
      if (object[0].path === "album") {
        this.getAlbum(object[1].path);
      } else if (object[0].path === "artist") {
        this.getArtist(object[1].path);
      } else if (object[0].path === "show") {
        this.getShow(object[1].path);
      }
    })
  }

  getAlbum(id: String): void {
    this.spotify.getAlbum(id).subscribe( (json:any) => {
      this.type = "Album";
      this.img = json.images[0].url;
      this.name = json.name;
      this.tracks = json.tracks.items;
    })
  }

  getArtist(id: String): void {
    this.spotify.getArtist(id).subscribe( artist => {
      this.type = "Artist";
      this.img =artist.images[0].url;
      this.name = artist.name;
    })
    this.spotify.getArtistTracks(id).subscribe( (json:any) => {
      this.tracks = json.tracks;
    })
  }

  getShow(id: String): void {
    this.spotify.getShowEpisodes(id).subscribe( (json:any) =>{
      this.type = "Show";
      this.img = json.images[0].url;
      this.name = json.name;
      this.episodes = json.episodes.items;
    })
  }
}
