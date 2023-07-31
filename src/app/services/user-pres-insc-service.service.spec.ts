import { TestBed } from '@angular/core/testing';

import { UserPresInscServiceService } from './user-pres-insc-service.service';

describe('UserPresInscServiceService', () => {
  let service: UserPresInscServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPresInscServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
