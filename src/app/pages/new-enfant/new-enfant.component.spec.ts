import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnfantComponent } from './new-enfant.component';

describe('NewEnfantComponent', () => {
  let component: NewEnfantComponent;
  let fixture: ComponentFixture<NewEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEnfantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
