import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Auction} from '../shared/auction';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css'],
})
export class AuctionCardComponent implements OnInit {
  @Input() auction!: Auction;
  @Output() deleteEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}
}
