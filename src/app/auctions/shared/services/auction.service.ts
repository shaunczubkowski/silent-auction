import { Injectable } from '@angular/core';
import {Auction} from "../auction";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  auctionsList: Auction[] = [
    {
      id: 1,
      startDate: new Date(),
      endDate: new Date(),
      image: '',
      description: 'teaasdfasdf',
      creator: 'bob',
      title: 'Kanoe'
    }
  ];

  constructor() { }

  getAuctions(): Observable<Auction[]> {
    return of(this.auctionsList);
  }

  addAuction(auction: Auction): void {
    this.auctionsList.push(auction);
  }

  getAuctionById(id: number): Observable<Auction | undefined> {
    return of(this.auctionsList.find(auction => {
      return auction.id === id
    }));
  }

  deleteAuctionById(id: number): void {
    this.auctionsList.splice(this.auctionsList.findIndex(auction => auction.id === id), 1);
  }
}
