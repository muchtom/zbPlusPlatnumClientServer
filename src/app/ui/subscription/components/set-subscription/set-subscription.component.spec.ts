import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSubscriptionComponent } from './set-subscription.component';

describe('SetSubscriptionComponent', () => {
  let component: SetSubscriptionComponent;
  let fixture: ComponentFixture<SetSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
