import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierParcoursComponent } from './modifier-parcours.component';

describe('ModifierParcoursComponent', () => {
  let component: ModifierParcoursComponent;
  let fixture: ComponentFixture<ModifierParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierParcoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
