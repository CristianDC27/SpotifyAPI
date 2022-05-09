import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image?: String;
  @Input() name?: String;
  @Input() id?: String;
  fullName?: String;

  constructor() { }

  ngOnInit(): void {
    if(this.image==undefined){
      this.image = "https://blog.landr.com/wp-content/uploads/2017/09/Format-Vinyl-Records-inpost.jpg";
    }
    this.fullName = this.name;
    if(this.name!==undefined && this.name.length > 15){
      this.name = this.name?.substring(0,11)+"...";
    }
  }

}
