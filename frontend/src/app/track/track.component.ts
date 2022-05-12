import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/track';
import { BackendService } from '../backend.service';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  track?: Track;
  @Input() number?: number;
  @Input() id?: String;
  @Input() add?: Boolean;

  constructor(
    private spotify: SpotifyService,
    private backend: BackendService
  ) { }

  ngOnInit(): void {
    this.spotify.getTrack(this.id!).subscribe( (track:any) => {
      this.track=track;
    });
  }

  save(): void {
    if (this.track) {
      console.log("click guardar");
      this.backend.save(this.track);
    }
  }

  remove(): void {
    if (this.track) {
      console.log("click borrar");
      this.backend.remove(this.track);
    }
  }
}
