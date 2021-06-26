import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auction-image',
  templateUrl: './auction-image.component.html',
  styleUrls: ['./auction-image.component.css']
})
export class AuctionImageComponent implements OnInit {
  @Input() image!: string;

  defaultImage = 'https://via.placeholder.com/150';

  constructor() { }

  ngOnInit(): void {
  }

}
