import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCustomerOnboardComponent } from './set-customer-onboard.component';

describe('SetCustomerOnboardComponent', () => {
  let component: SetCustomerOnboardComponent;
  let fixture: ComponentFixture<SetCustomerOnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCustomerOnboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCustomerOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
