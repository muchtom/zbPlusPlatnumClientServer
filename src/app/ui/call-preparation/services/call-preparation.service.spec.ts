import { TestBed } from '@angular/core/testing';

import { CallPreparationService } from './call-preparation.service';

describe('CallPreparationService', () => {
  let service: CallPreparationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallPreparationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
