import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAdminActivityDetailComponent } from './set-admin-activity-detail.component';

describe('SetAdminActivityDetailComponent', () => {
  let component: SetAdminActivityDetailComponent;
  let fixture: ComponentFixture<SetAdminActivityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetAdminActivityDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetAdminActivityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
