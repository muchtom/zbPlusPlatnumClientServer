import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyServicesComponent } from './qualify-services.component';

describe('QualifyServicesComponent', () => {
  let component: QualifyServicesComponent;
  let fixture: ComponentFixture<QualifyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifyServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualifyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
