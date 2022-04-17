import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
  homeStyle!: String;
  searchStyle!: String;
  mySpaceStyle!: String;

  constructor() { }

  ngOnInit(): void {
    this.homeStyle = "badges-nav__destination badges-nav__destination--active";
    this.searchStyle = "badges-nav__destination";
    this.mySpaceStyle = "badges-nav__destination";
  }

  reset(): void {
    this.homeStyle = "badges-nav__destination";
    this.searchStyle = "badges-nav__destination";
    this.mySpaceStyle = "badges-nav__destination";
  }

  changeHome(): void {
    this.reset();
    this.homeStyle += " badges-nav__destination--active";
  }

  changeSearch(): void {
    this.reset();
    this.searchStyle += " badges-nav__destination--active";
  }

  changeMySpace(): void {
    this.reset();
    this.mySpaceStyle += " badges-nav__destination--active";
  }

}
