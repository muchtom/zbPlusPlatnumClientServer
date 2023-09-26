import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRedeemComponent } from './set-redeem.component';

describe('SetRedeemComponent', () => {
  let component: SetRedeemComponent;
  let fixture: ComponentFixture<SetRedeemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetRedeemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetRedeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
