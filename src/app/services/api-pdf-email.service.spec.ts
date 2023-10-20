import { TestBed } from '@angular/core/testing';

import { ApiPdfEmailService } from './api-pdf-email.service';

describe('ApiPdfEmailService', () => {
  let service: ApiPdfEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPdfEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
