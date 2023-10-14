import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDocumentReviewComponent } from './customer-document-review.component';

describe('CustomerDocumentReviewComponent', () => {
  let component: CustomerDocumentReviewComponent;
  let fixture: ComponentFixture<CustomerDocumentReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDocumentReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDocumentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
