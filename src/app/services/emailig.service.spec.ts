import { TestBed } from '@angular/core/testing';

import { EmailigService } from './emailig.service';

describe('EmailigService', () => {
  let service: EmailigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
