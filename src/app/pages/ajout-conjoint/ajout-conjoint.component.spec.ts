import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutConjointComponent } from './ajout-conjoint.component';

describe('AjoutConjointComponent', () => {
  let component: AjoutConjointComponent;
  let fixture: ComponentFixture<AjoutConjointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutConjointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutConjointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
