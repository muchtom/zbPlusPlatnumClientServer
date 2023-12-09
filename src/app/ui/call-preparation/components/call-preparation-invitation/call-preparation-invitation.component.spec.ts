import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallPreparationInvitationComponent } from './call-preparation-invitation.component';

describe('CallPreparationInvitationComponent', () => {
  let component: CallPreparationInvitationComponent;
  let fixture: ComponentFixture<CallPreparationInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallPreparationInvitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallPreparationInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
