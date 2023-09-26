import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMemberDetailComponent } from './set-member-detail.component';

describe('SetMemberDetailComponent', () => {
  let component: SetMemberDetailComponent;
  let fixture: ComponentFixture<SetMemberDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetMemberDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetMemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
