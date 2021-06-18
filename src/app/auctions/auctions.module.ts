import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { AuctionsComponent } from './auctions.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuctionsComponent, AuctionListComponent, AuctionCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, SharedModule],
  exports: [AuctionsComponent],
})
export class AuctionsModule {}
