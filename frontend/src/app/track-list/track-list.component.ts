import { Component, HostListener, Input, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Track } from 'src/track';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  header?: HTMLElement;
  sticky?: number;
  @Input() tracks?: Track[];
  @Input() add?: Boolean;

  constructor() { }

  ngOnInit(): void {
    this.header = document.getElementById("myHeader")!;
    this.sticky = this.header?.offsetTop;
  }

  @HostListener("window:scroll", ['$event'])
  fixed($event:Event): void {
    if (window.pageYOffset >= this.sticky!) {
      this.header?.classList.add("sticky");
    } else {
      this.header?.classList.remove("sticky");
    }
  }
}
