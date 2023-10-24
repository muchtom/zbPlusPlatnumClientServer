import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardCustomerInfoComponent } from './onboard-customer-info.component';

describe('OnboardCustomerInfoComponent', () => {
  let component: OnboardCustomerInfoComponent;
  let fixture: ComponentFixture<OnboardCustomerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardCustomerInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
