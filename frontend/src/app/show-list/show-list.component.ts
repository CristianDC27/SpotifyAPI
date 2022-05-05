import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Episode } from 'src/episodes';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
  header?: HTMLElement;
  sticky?: number;
  @Input() episodes?: Episode[];

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
