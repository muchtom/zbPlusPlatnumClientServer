import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCustomerPaymentComponent } from './set-customer-payment.component';

describe('SetCustomerPaymentComponent', () => {
  let component: SetCustomerPaymentComponent;
  let fixture: ComponentFixture<SetCustomerPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCustomerPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCustomerPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
