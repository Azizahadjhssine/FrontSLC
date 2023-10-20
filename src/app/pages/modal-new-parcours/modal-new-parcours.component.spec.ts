import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewParcoursComponent } from './modal-new-parcours.component';

describe('ModalNewParcoursComponent', () => {
  let component: ModalNewParcoursComponent;
  let fixture: ComponentFixture<ModalNewParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewParcoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
