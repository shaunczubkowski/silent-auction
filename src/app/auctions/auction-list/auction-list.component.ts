import { Component, Input, OnInit } from '@angular/core';
import { Auction } from '../shared/auction';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css'],
})
export class AuctionListComponent implements OnInit {
  @Input() auctionList: Auction[] | undefined;
  constructor() {}

  ngOnInit(): void {}
}
