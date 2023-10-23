import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCustomerDetailComponent } from './individual-customer-detail.component';

describe('IndividualCustomerDetailComponent', () => {
  let component: IndividualCustomerDetailComponent;
  let fixture: ComponentFixture<IndividualCustomerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCustomerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
