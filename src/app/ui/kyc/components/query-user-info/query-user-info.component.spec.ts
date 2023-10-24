import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryUserInfoComponent } from './query-user-info.component';

describe('QueryUserInfoComponent', () => {
  let component: QueryUserInfoComponent;
  let fixture: ComponentFixture<QueryUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryUserInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
