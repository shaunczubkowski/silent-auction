import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Auction} from "../shared/auction";
import {AuctionService} from "../shared/services/auction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auction-add-form',
  templateUrl: './auction-add-form.component.html',
  styleUrls: ['./auction-add-form.component.css']
})
export class AuctionAddFormComponent implements OnInit {
  @Input() auctionData!: Auction;

  constructor(private fb: FormBuilder, private auctionService: AuctionService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.auctionData) {
      this.loadData(this.auctionData);
    }
  }

  auctionForm = this.fb.group({
    title: ['', [Validators.required]],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]],
    image: [''],
    description: ['', Validators.required]
  });

  saveForm() {
    this.auctionService.addAuction(this.auctionForm.value);
    this.router.navigate(['auction/list']);
  }

  loadData(auctionData: Auction) {
    this.auctionForm.patchValue(auctionData);
  }

}
