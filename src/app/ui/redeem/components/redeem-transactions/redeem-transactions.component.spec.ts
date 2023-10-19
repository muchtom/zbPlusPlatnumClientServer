import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemTransactionsComponent } from './redeem-transactions.component';

describe('RedeemTransactionsComponent', () => {
  let component: RedeemTransactionsComponent;
  let fixture: ComponentFixture<RedeemTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedeemTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
