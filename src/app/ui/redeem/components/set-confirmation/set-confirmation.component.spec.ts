import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConfirmationComponent } from './set-confirmation.component';

describe('SetConfirmationComponent', () => {
  let component: SetConfirmationComponent;
  let fixture: ComponentFixture<SetConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
