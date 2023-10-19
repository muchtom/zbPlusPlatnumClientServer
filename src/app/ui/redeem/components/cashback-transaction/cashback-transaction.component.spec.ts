import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackTransactionComponent } from './cashback-transaction.component';

describe('CashbackTransactionComponent', () => {
  let component: CashbackTransactionComponent;
  let fixture: ComponentFixture<CashbackTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashbackTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashbackTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
