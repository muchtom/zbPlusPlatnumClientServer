import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProductSaleComponent } from './set-product-sale.component';

describe('SetProductSaleComponent', () => {
  let component: SetProductSaleComponent;
  let fixture: ComponentFixture<SetProductSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetProductSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetProductSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
