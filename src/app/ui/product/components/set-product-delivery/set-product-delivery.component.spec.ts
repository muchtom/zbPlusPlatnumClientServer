import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProductDeliveryComponent } from './set-product-delivery.component';

describe('SetProductDeliveryComponent', () => {
  let component: SetProductDeliveryComponent;
  let fixture: ComponentFixture<SetProductDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetProductDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetProductDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
