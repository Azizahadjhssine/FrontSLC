import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireByAssureComponent } from './affaire-by-assure.component';

describe('AffaireByAssureComponent', () => {
  let component: AffaireByAssureComponent;
  let fixture: ComponentFixture<AffaireByAssureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffaireByAssureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffaireByAssureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
