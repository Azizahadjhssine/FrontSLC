import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailAffaireComponent } from './modal-detail-affaire.component';

describe('ModalDetailAffaireComponent', () => {
  let component: ModalDetailAffaireComponent;
  let fixture: ComponentFixture<ModalDetailAffaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailAffaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetailAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
