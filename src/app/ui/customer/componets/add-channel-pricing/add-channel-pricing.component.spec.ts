import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChannelPricingComponent } from './add-channel-pricing.component';

describe('AddChannelPricingComponent', () => {
  let component: AddChannelPricingComponent;
  let fixture: ComponentFixture<AddChannelPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChannelPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChannelPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
