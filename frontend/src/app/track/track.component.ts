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
      this.backend.save(this.track).subscribe();
    }
  }

  remove(): void {
    if (this.track) {
      this.backend.remove(this.track).subscribe( () => window.location.reload());
    }
  }
}
