import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConjointComponent } from './new-conjoint.component';

describe('NewConjointComponent', () => {
  let component: NewConjointComponent;
  let fixture: ComponentFixture<NewConjointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConjointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConjointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
