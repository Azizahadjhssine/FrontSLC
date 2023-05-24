import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsParcoursComponent } from './details-parcours.component';

describe('DetailsParcoursComponent', () => {
  let component: DetailsParcoursComponent;
  let fixture: ComponentFixture<DetailsParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsParcoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
