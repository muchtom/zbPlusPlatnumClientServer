import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetHealthActivityComponent } from './set-health-activity.component';

describe('SetHealthActivityComponent', () => {
  let component: SetHealthActivityComponent;
  let fixture: ComponentFixture<SetHealthActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetHealthActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetHealthActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
