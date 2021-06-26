import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { AuctionsComponent } from './auctions.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from "../shared/material.module";
import { AuctionAddFormComponent } from './auction-add-form/auction-add-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuctionRoutingModule} from "./auction-routing.module";
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { AuctionImageComponent } from './shared/components/auction-image/auction-image.component';

@NgModule({
  declarations: [AuctionsComponent, AuctionListComponent, AuctionCardComponent, AuctionAddFormComponent, AuctionDetailComponent, AuctionImageComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, SharedModule, MaterialModule, ReactiveFormsModule, AuctionRoutingModule],
  exports: [AuctionsComponent],
})
export class AuctionsModule {}
