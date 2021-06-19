import { Component } from '@angular/core';
import { Auction } from '../shared/auction';
import {AuctionService} from "../shared/services/auction.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css'],
})
export class AuctionListComponent {
  auctions$: Observable<Auction[]>;

  constructor(private auctionService: AuctionService) {
    this.auctions$ = this.auctionService.getAuctions();
  }
}
