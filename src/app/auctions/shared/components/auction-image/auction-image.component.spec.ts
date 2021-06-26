import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionImageComponent } from './auction-image.component';

describe('AuctionImageComponent', () => {
  let component: AuctionImageComponent;
  let fixture: ComponentFixture<AuctionImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
