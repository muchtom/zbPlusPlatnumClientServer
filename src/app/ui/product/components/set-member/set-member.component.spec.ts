import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMemberComponent } from './set-member.component';

describe('SetMemberComponent', () => {
  let component: SetMemberComponent;
  let fixture: ComponentFixture<SetMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
