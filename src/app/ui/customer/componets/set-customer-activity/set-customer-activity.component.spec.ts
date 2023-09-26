import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCustomerActivityComponent } from './set-customer-activity.component';

describe('SetCustomerActivityComponent', () => {
  let component: SetCustomerActivityComponent;
  let fixture: ComponentFixture<SetCustomerActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCustomerActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCustomerActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
