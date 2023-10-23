import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCustomerDetailComponent } from './set-customer-detail.component';

describe('SetCustomerDetailComponent', () => {
  let component: SetCustomerDetailComponent;
  let fixture: ComponentFixture<SetCustomerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCustomerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
