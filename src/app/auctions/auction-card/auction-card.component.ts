import {Component, Input, OnInit} from '@angular/core';
import {Auction} from '../shared/auction';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css'],
})
export class AuctionCardComponent implements OnInit {
  @Input() auction: Auction | undefined;

  constructor() {
    this.auction = undefined;
  }

  ngOnInit(): void {}

  editAuction(auction: Auction | undefined): void {
  }
}
