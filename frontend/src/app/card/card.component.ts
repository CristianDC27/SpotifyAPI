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
    this.fullName = this.name;
    if(this.name!.length > 20){
      this.name = this.name?.substring(0,17)+"...";
    }
  }

}
