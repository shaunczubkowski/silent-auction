import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionAddFormComponent } from './auction-add-form.component';

describe('AuctionAddFormComponent', () => {
  let component: AuctionAddFormComponent;
  let fixture: ComponentFixture<AuctionAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
