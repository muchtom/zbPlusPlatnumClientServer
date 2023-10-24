import { TestBed } from '@angular/core/testing';

import { OnboardCustomerService } from './onboard-customer.service';

describe('OnboardCustomerService', () => {
  let service: OnboardCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
