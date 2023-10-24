import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetActivationComponent } from './set-activation.component';

describe('SetActivationComponent', () => {
  let component: SetActivationComponent;
  let fixture: ComponentFixture<SetActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetActivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
