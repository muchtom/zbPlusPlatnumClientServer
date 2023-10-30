import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomerTransactionComponent } from './user-customer-transaction.component';

describe('UserCustomerTransactionComponent', () => {
  let component: UserCustomerTransactionComponent;
  let fixture: ComponentFixture<UserCustomerTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCustomerTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCustomerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
