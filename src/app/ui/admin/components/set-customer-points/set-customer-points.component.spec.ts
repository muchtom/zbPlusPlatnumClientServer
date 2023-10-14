import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCustomerPointsComponent } from './set-customer-points.component';

describe('SetCustomerPointsComponent', () => {
  let component: SetCustomerPointsComponent;
  let fixture: ComponentFixture<SetCustomerPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCustomerPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCustomerPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
