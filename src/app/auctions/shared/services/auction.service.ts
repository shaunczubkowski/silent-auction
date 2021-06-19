import { Injectable } from '@angular/core';
import {Auction} from "../auction";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  auctionsList: Auction[] = [
  ];

  constructor() { }

  getAuctions(): Observable<Auction[]> {
    return of(this.auctionsList);
  }

  addAuction(auction: Auction): void {
    this.auctionsList.push(auction);
  }
}
