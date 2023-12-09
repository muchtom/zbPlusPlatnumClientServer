import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCallPreparationComponent } from './set-call-preparation.component';

describe('SetCallPreparationComponent', () => {
  let component: SetCallPreparationComponent;
  let fixture: ComponentFixture<SetCallPreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCallPreparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCallPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
