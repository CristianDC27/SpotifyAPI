import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/track';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  track?: Track;
  @Input() number?: number;
  @Input() id?: String

  constructor( private spotify: SpotifyService ) { }

  ngOnInit(): void {
    this.spotify.getTrack(this.id!).subscribe( (track:any) => {
      this.track=track;
    });
  }

}
