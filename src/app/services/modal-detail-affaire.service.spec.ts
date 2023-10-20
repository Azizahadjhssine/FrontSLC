import { TestBed } from '@angular/core/testing';

import { ModalDetailAffaireService } from './modal-detail-affaire.service';

describe('ModalDetailAffaireService', () => {
  let service: ModalDetailAffaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDetailAffaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
