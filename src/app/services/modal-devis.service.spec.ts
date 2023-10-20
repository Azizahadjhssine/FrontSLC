import { TestBed } from '@angular/core/testing';

import { ModalDevisService } from './modal-devis.service';

describe('ModalDevisService', () => {
  let service: ModalDevisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDevisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
