import { TestBed } from '@angular/core/testing';

import { ModalNewParcoursService } from './modal-new-parcours.service';

describe('ModalNewParcoursService', () => {
  let service: ModalNewParcoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalNewParcoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
