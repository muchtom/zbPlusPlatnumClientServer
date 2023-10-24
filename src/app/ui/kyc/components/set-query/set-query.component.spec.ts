import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetQueryComponent } from './set-query.component';

describe('SetQueryComponent', () => {
  let component: SetQueryComponent;
  let fixture: ComponentFixture<SetQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
