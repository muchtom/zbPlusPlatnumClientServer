import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryInfoComponent } from './query-info.component';

describe('QueryInfoComponent', () => {
  let component: QueryInfoComponent;
  let fixture: ComponentFixture<QueryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
