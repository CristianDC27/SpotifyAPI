import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/episodes';
import { Track } from 'src/track';
import { BackendService } from '../backend.service';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  type?: String;
  img?: String = "https://blog.landr.com/wp-content/uploads/2017/09/Format-Vinyl-Records-inpost.jpg";
  name?: String;
  tracks?: Track[];
  episodes?: Episode[];

  location?: String;
  add: Boolean = true;

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService,
    private backend: BackendService
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe( (object: any) => {
      if (object[0].path === "album") {
        this.getAlbum(object[1].path);
      } else if (object[0].path === "artist") {
        this.getArtist(object[1].path);
      } else if (object[0].path === "show") {
        this.getShow(object[1].path);
      } else if (object[0].path === "myspace") {
        this.add = false;
        this.getSavedTracks();
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

  getSavedTracks(): void {
    this.type = "Playlist";
    this.name = "My Space";
    this.backend.getSavedTracks().subscribe( tracks => {
      var idsString = "";
      for (let track of tracks) {
        idsString += track.id +",";
      }
      console.log(idsString);
      this.spotify.getTracks(idsString.substring(0,idsString.length-1)).subscribe((json:any) => {
        this.tracks = json.tracks;
        this.img = json.tracks[0].album.images[0].url;
      });
    })
  }
}
