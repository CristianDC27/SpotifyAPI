import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
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
  first: Boolean = true;
  @Input() tracks?: Track[];
  @Input() add?: Boolean;
  @Output() refresh: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.header = document.getElementById("myHeader")!;
  }

  @HostListener("window:scroll", ['$event'])
  fixed($event:Event): void {
    if(this.first){
      this.sticky = this.header?.offsetTop;
      this.first = false;
    }
    if (window.pageYOffset >= this.sticky!) {
      this.header?.classList.add("sticky");
    } else {
      this.header?.classList.remove("sticky");
    }
  }

  onRefresh() {
    this.refresh.emit();
  }
}
