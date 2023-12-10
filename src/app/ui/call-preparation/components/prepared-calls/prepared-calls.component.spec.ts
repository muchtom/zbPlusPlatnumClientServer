import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparedCallsComponent } from './prepared-calls.component';

describe('PreparedCallsComponent', () => {
  let component: PreparedCallsComponent;
  let fixture: ComponentFixture<PreparedCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparedCallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparedCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
