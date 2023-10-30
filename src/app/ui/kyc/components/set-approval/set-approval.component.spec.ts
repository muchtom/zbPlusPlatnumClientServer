import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetApprovalComponent } from './set-approval.component';

describe('SetApprovalComponent', () => {
  let component: SetApprovalComponent;
  let fixture: ComponentFixture<SetApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
