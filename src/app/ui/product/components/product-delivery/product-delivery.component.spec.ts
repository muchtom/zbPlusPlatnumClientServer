import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeliveryComponent } from './product-delivery.component';

describe('ProductDeliveryComponent', () => {
  let component: ProductDeliveryComponent;
  let fixture: ComponentFixture<ProductDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
