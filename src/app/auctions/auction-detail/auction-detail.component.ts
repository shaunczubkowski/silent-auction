import { Component, OnInit } from '@angular/core';
import {AuctionService} from "../shared/services/auction.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import {Auction} from "../shared/auction";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.css']
})
export class AuctionDetailComponent implements OnInit {
  auction$!: Observable<Auction | undefined>;
  auction: Auction | undefined;

  constructor(private auctionService: AuctionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.auction$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.auctionService.getAuctionById(parseInt(params.get('id')!)))
      );
  }

}
