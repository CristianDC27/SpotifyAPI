import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  @Input() track?: Track;
  @Input() number?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
