import { Component, OnInit } from '@angular/core';
import { Album } from 'src/album';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  albums: Album[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
