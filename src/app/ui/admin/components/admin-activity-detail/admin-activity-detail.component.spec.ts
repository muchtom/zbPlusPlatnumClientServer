import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivityDetailComponent } from './admin-activity-detail.component';

describe('AdminActivityDetailComponent', () => {
  let component: AdminActivityDetailComponent;
  let fixture: ComponentFixture<AdminActivityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActivityDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminActivityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
