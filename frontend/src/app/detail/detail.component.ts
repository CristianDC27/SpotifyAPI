import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  location?: String;

  constructor( private route: ActivatedRoute, private spotify: SpotifyService ) { }

  ngOnInit(): void {
    this.route.url.subscribe( (object: any) => {
      if(object[0].path === "album") {
        this.getAlbum(object[1].path);
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

}
