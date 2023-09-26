import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButcheryStatusComponent } from './butchery-status.component';

describe('ButcheryStatusComponent', () => {
  let component: ButcheryStatusComponent;
  let fixture: ComponentFixture<ButcheryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButcheryStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButcheryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
