import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProductPricingComponent } from './set-product-pricing.component';

describe('SetProductPricingComponent', () => {
  let component: SetProductPricingComponent;
  let fixture: ComponentFixture<SetProductPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetProductPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetProductPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
