import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemDetailComponent } from './redeem-detail.component';

describe('RedeemDetailComponent', () => {
  let component: RedeemDetailComponent;
  let fixture: ComponentFixture<RedeemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedeemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
