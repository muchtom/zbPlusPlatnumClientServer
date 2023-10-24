import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUserActivationComponent } from './service-user-activation.component';

describe('ServiceUserActivationComponent', () => {
  let component: ServiceUserActivationComponent;
  let fixture: ComponentFixture<ServiceUserActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceUserActivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceUserActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
