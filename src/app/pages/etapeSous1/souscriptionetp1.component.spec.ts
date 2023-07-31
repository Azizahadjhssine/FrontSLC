import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Souscriptionetp1Component } from './souscriptionetp1.component';

describe('Souscriptionetp1Component', () => {
  let component: Souscriptionetp1Component;
  let fixture: ComponentFixture<Souscriptionetp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Souscriptionetp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Souscriptionetp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
