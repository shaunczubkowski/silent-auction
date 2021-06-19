import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Auction} from "../shared/auction";
import {AuctionService} from "../shared/services/auction.service";

@Component({
  selector: 'app-auction-add-form',
  templateUrl: './auction-add-form.component.html',
  styleUrls: ['./auction-add-form.component.css']
})
export class AuctionAddFormComponent implements OnInit {
  @Input() auctionData: Auction | undefined;

  constructor(private fb: FormBuilder, private auctionService: AuctionService) {
    this.auctionData = undefined;
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
  }

  loadData(auctionData: Auction) {
    this.auctionForm.patchValue(auctionData);
  }

}
