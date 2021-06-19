import { Pipe, PipeTransform } from '@angular/core';
import {Auction} from "../../auctions/shared/auction";

@Pipe({
  name: 'isActive'
})
export class IsActivePipe implements PipeTransform {

  transform(auction: Auction): string {
    const { startDate, endDate } = auction;
    const currentDate = new Date().toLocaleDateString();

    if (currentDate <= endDate.toLocaleDateString() && currentDate >= startDate.toLocaleDateString())  {
      return 'Active';
    } else if (currentDate >= endDate.toLocaleDateString()) {
      return 'Closed';
    } else if (currentDate < startDate.toLocaleDateString()) {
      return 'Scheduled';
    } else {
      return '';
    }
  }

}
