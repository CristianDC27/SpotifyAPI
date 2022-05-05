import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/episodes';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})

export class ShowComponent implements OnInit {
  @Input() episode?: Episode;
  @Input() number?: number;
  name?: String;

  constructor() { }

  ngOnInit(): void {
    this.name = this.episode!.name;
    if(this.name!==undefined && this.name.length > 20){
      this.name = this.name?.substring(0,17)+"...";
    }
  }

}
