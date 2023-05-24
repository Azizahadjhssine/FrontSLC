import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterParcoursComponent } from './ajouter-parcours.component';

describe('AjouterParcoursComponent', () => {
  let component: AjouterParcoursComponent;
  let fixture: ComponentFixture<AjouterParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterParcoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
