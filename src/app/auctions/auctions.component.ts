import { Component, OnInit } from '@angular/core';
import { Auction } from './shared/auction';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css'],
})
export class AuctionsComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}

  isLoading(): boolean {
    return false;
  }
}
