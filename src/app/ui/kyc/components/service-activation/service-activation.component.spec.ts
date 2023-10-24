import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceActivationComponent } from './service-activation.component';

describe('ServiceActivationComponent', () => {
  let component: ServiceActivationComponent;
  let fixture: ComponentFixture<ServiceActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceActivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
