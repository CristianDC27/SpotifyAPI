import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/track';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() type?: String;
  @Input() img?: String;
  @Input() name?: String;
  @Input() tracks?: Track[];

  constructor() { }

  ngOnInit(): void {
  }

}
