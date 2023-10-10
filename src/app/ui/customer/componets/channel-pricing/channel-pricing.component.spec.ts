import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPricingComponent } from './channel-pricing.component';

describe('ChannelPricingComponent', () => {
  let component: ChannelPricingComponent;
  let fixture: ComponentFixture<ChannelPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
