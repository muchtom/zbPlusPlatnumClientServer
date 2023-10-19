import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomerDataComponent } from './user-customer-data.component';

describe('UserCustomerDataComponent', () => {
  let component: UserCustomerDataComponent;
  let fixture: ComponentFixture<UserCustomerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCustomerDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCustomerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
