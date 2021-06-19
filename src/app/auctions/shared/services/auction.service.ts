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
      creator: 'George',
      title: 'Patio Set',
      startDate: new Date(),
      endDate: new Date(),
      image: 'https://via.placeholder.com/150',
      description: 'Two patio chairs, side table, and umbrella.',
    },
    {
      id: 2,
      creator: 'Jill',
      title: 'Grill Accessories',
      startDate: new Date(),
      endDate: new Date(),
      image: 'https://via.placeholder.com/150',
      description: 'Utensil set, cordless thermometer',
    },
    {
      id: 3,
      creator: 'Jason',
      title: 'Car Washing Kit',
      startDate: new Date(),
      endDate: new Date(),
      image: 'https://via.placeholder.com/150',
      description: 'Sponges, car wash fluid, tire spray',
    },
    {
      id: 3,
      creator: 'Jason',
      title: 'Car Washing Kit',
      startDate: new Date(),
      endDate: new Date(),
      image: 'https://via.placeholder.com/150',
      description: 'Sponges, car wash fluid, tire spray',
    },
    {
      id: 3,
      creator: 'Jason',
      title: 'Car Washing Kit',
      startDate: new Date(),
      endDate: new Date(),
      image: 'https://via.placeholder.com/150',
      description: 'Sponges, car wash fluid, tire spray',
    },
    {
      id: 3,
      creator: 'Jason',
      title: 'Car Washing Kit',
      startDate: new Date(),
      endDate: new Date(),
      image: 'https://via.placeholder.com/150',
      description: 'Sponges, car wash fluid, tire spray',
    },
    {
      id: 3,
      creator: 'Jason',
      title: 'Car Washing Kit',
      startDate: new Date(),
      endDate: new Date(),
      image: 'https://via.placeholder.com/150',
      description: 'Sponges, car wash fluid, tire spray',
    },
    {
      id: 3,
      creator: 'Jason',
      title: 'Car Washing Kit',
      startDate: new Date(),
      endDate: new Date(),
      image: 'https://via.placeholder.com/150',
      description: 'Sponges, car wash fluid, tire spray',
    },
  ];

  constructor() { }

  getAuctions(): Observable<Auction[]> {
    return of(this.auctionsList);
  }
}
